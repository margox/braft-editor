import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import languages from 'languages'
import { Modifier, CompositeDecorator, DefaultDraftBlockRenderMap, Editor, ContentState, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js'
import { convertToHTML, convertFromHTML } from 'draft-convert'
import { checkReturn } from 'utils/editor'
import { getToHTMLConfig, getFromHTMLConfig } from 'configs/convert'
import defaultOptions from 'configs/options'
import { getBlockRendererFn, customBlockRenderMap, blockStyleFn, getCustomStyleMap, decorators } from 'renderers'
import ControlBar from 'components/business/ControlBar'
import MediaLibrary from 'helpers/MediaLibrary'
import { detectColorsFromHTML } from 'helpers/colors'

const editorDecorators = new CompositeDecorator(decorators)
const blockRenderMap = DefaultDraftBlockRenderMap.merge(customBlockRenderMap)

export default class BraftEditor extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      tempColors: [],
      editorState: EditorState.createEmpty(editorDecorators),
      editorProps: {}
    }

    this.mediaLibrary = new MediaLibrary()

    let browser = null
    if (window.chrome) {
      browser = 'chrome'
    } else if (window.safari) {
      browser = 'safari'
    } else if (navigator.userAgent.indexOf('Firefox') > 0) {
      browser = 'firefox'
    }

    document.body.classList.add('browser-' + browser)

  }

  componentWillReceiveProps = (next) => {

    if (!this.props.initialContent && next.initialContent) {
      this.setContent(next.initialContent)
    }

  }

  onChange = (editorState) => {

    this.setState({ editorState }, () => {

      clearTimeout(this.syncTimer)

      this.syncTimer = setTimeout(() => {
        const { onChange, onRawChange, onHTMLChange } = this.props
        onChange && onChange(this.getContent())
        onHTMLChange && onHTMLChange(this.getHTMLContent())
        onRawChange && onRawChange(this.getRawContent())
      }, 300)

    })

  }

  getHTMLContent = () => {
    return this.getContent('html')
  }

  getRawContent = () => {
    return this.getContent('raw')
  }

  getContent = (format) => {

    format = format || this.props.contentFormat || 'raw'
    const contentState = this.getContentState()
    let { fontFamilies } = this.props
    fontFamilies = fontFamilies || defaultOptions.fontFamilies

    return format === 'html' ? convertToHTML(getToHTMLConfig({
      contentState, fontFamilies
    }))(contentState) : convertToRaw(this.getContentState())

  }

  getContentState = () => {
    return this.getEditorState().getCurrentContent()
  }

  getEditorState = () => {
    return this.state.editorState
  }

  getDraftInstance = () => {
    return this.draftInstance
  }

  getMediaLibraryInstance = () => {
    return this.mediaLibrary
  }

  setContent = (content, format) => {

    let convertedContent
    let newState = {}
    let { contentFormat, colors } = this.props
    const presetColors = colors || defaultOptions.colors

    contentFormat = format || contentFormat || 'raw'

    if (contentFormat === 'html') {
      newState.tempColors = [ ...this.state.tempColors, ...detectColorsFromHTML(content) ].filter(item => presetColors.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
      convertedContent = convertFromHTML(getFromHTMLConfig())(content)
    } else if (contentFormat === 'raw') {
      convertedContent = convertFromRaw(content)
    }

    newState.editorState = EditorState.createWithContent(convertedContent, editorDecorators)
    this.setState(newState)

  }

  setEditorProp = (key, name)  =>{
    let editorProps = {
      ...this.state.editorProps,
      [key]: name
    }
    this.setState({ editorProps })
  }

  forceRender = () => {

    const editorState = this.state.editorState
    const contentState = editorState.getCurrentContent()
    const newEditorState = EditorState.createWithContent(contentState, editorDecorators)

    this.setState({editorState: newEditorState})

  }

  handleKeyCommand = (command) => {

    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)

    if (newState) {
      this.onChange(newState)
      return true
    }

    return false

  }

  handleReturn = (event) => {

    const editorState = checkReturn(this.state.editorState, event);
  
    if (editorState) {
      this.onChange(editorState)
      return true
    }
  
    return false
  
  }

  handlePastedText = (text, html) => {

    if (!html) {
      return false
    }

    const { editorState, tempColors } = this.state
    const blockMap = convertFromHTML(getFromHTMLConfig())(html || text).blockMap
    const newState = Modifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), blockMap)
    const presetColors = this.props.colors || defaultOptions.colors

    this.setState({
      tempColors: [ ...tempColors, ...detectColorsFromHTML(html) ].filter(item => presetColors.indexOf(item) === -1).filter((item, index, array) => array.indexOf(item) === index)
    }, () => {
      this.onChange(EditorState.push(editorState, newState, 'insert-fragment'))
    })

    return true

  }

  render() {

    let {
      controls, height, media, addonControls, language,
      colors, fontSizes, fontFamilies, viewWrapper, placeholder
    } = this.props

    const { tempColors } = this.state
    const contentState = this.state.editorState.getCurrentContent()

    media = { ...defaultOptions.media, ...media }
    controls = controls || defaultOptions.controls
    addonControls = addonControls || defaultOptions.addonControls
    language = languages[language] || languages[defaultOptions.language]
    colors = colors || defaultOptions.colors
    fontSizes = fontSizes || defaultOptions.fontSizes
    fontFamilies = fontFamilies || defaultOptions.fontFamilies
    height = height || defaultOptions.height

    if (!media.uploadFn) {
      media.video = false
      media.audio = false
    }

    const controlBarProps = {
      onChange: this.onChange,
      editorState: this.state.editorState,
      editor: this.draftInstance,
      mediaLibrary: this.mediaLibrary,
      forceRender: this.forceRender,
      media, controls, contentState, language, viewWrapper,
      addonControls, colors, tempColors, fontSizes, fontFamilies,
    }

    const blockRendererFn = getBlockRendererFn({
      onChange: this.onChange,
      editorState: this.state.editorState,
      getEditorState: this.getEditorState,
      forceRender: this.forceRender,
      setEditorProp: this.setEditorProp,
      language, contentState, viewWrapper
    })

    const customStyleMap = getCustomStyleMap({
      colors: [ ...colors, ...tempColors ],
      fontSizes, fontFamilies
    })

    const editorProps = {
      ref: instance => this.draftInstance = instance,
      editorState: this.state.editorState,
      handleKeyCommand: this.handleKeyCommand,
      handleReturn: this.handleReturn,
      handlePastedText: this.handlePastedText,
      onChange: this.onChange,
      customStyleMap, blockStyleFn,
      blockRendererFn, blockRenderMap, placeholder,
      ...this.state.editorProps
    }

    return (
      <div className="BraftEditor-container">
        <ControlBar {...controlBarProps}/>
        <div className="BraftEditor-content" style={{height}}>
          <Editor { ...editorProps }/>
        </div>
      </div>
    )
  }

}