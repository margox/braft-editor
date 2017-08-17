import 'draft-js/dist/Draft.css'
import './assets/scss/_base.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import languages from 'languages'
import { CompositeDecorator, DefaultDraftBlockRenderMap, Editor, ContentState, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js'
import { convertToHTML, convertFromHTML } from 'draft-convert'
import { getToHTMLConfig, getFromHTMLConfig } from 'configs/convert'
import defaultOptions from 'configs/options'
import { getBlockRendererFn, blockRenderMap, blockStyleFn, getCustomStyleMap, decorators } from 'renderers'
import ControlBar from 'components/business/ControlBar'

const editorDecorators = new CompositeDecorator(decorators)
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap)

export default class BraftEditor extends React.Component {

  constructor(props) {

    super(props)

    let initialEditorState
    let { initialContent, contentFormat } = this.props

    contentFormat = contentFormat || 'raw'
    initialContent = initialContent || ''

    if (!initialContent) {
      initialEditorState = EditorState.createEmpty(editorDecorators)
    } else {

      let convertedContent

      if (contentFormat === 'html') {
        convertedContent = convertFromHTML(getFromHTMLConfig())(initialContent)
      } else if (contentFormat === 'raw') {
        convertedContent = convertFromRaw(initialContent)
      }

      initialEditorState = EditorState.createWithContent(convertedContent, editorDecorators)

    }

    this.onChange = this.onChange.bind(this)
    this.readyForSync = true
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this.state = {
      editorState: initialEditorState,
      editorProps: {}
    }

  }

  onChange(editorState) {

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

  getHTMLContent () {
    return this.getContent('html')
  }

  getRawContent () {
    return this.getContent('raw')
  }

  getContent (format) {

    format = format || this.props.contentFormat || 'raw'
    const contentState = this.getContentState()
    let { colors, fontSizes, fontFamilies } = this.props
    colors = colors || defaultOptions.colors
    fontSizes = fontSizes || defaultOptions.fontSizes
    fontFamilies = fontFamilies || defaultOptions.fontFamilies

    return format === 'html' ? convertToHTML(getToHTMLConfig({
      contentState, colors, fontSizes, fontFamilies
    }))(contentState) : convertToRaw(this.getContentState())

  }

  getContentState () {
    return this.getEditorState().getCurrentContent()
  }

  getEditorState () {
    return this.state.editorState
  }

  getDraftInstance () {
    return this.draftInstance
  }

  setEditorProp (key, name) {
    let editorProps = {
      ...this.state.editorProps,
      [key]: name
    }
    this.setState({ editorProps })
  }

  forceRender () {

    const editorState = this.state.editorState
    const contentState = editorState.getCurrentContent()
    const newEditorState = EditorState.createWithContent(contentState, editorDecorators)

    this.setState({editorState: newEditorState})

  }

  handleKeyCommand(command) {

    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)

    if (newState) {
      this.onChange(newState)
      return 'handled'
    }

    return 'not-handled'

  }

  render() {

    let { controls, height, media, addonControls, language, colors, fontSizes, fontFamilies } = this.props
    let contentState = this.state.editorState.getCurrentContent()

    media = { ...defaultOptions.media, ...media }
    controls = controls || defaultOptions.controls
    addonControls = addonControls || defaultOptions.addonControls
    language = languages[language] || languages[defaultOptions.language]
    colors = colors || defaultOptions.colors
    fontSizes = fontSizes || defaultOptions.fontSizes
    fontFamilies = fontFamilies || defaultOptions.fontFamilies

    if (!media.uploadFn) {
      media.video = false
      media.audio = false
    }

    const controlBarProps = {
      onChange: this.onChange,
      editorState: this.state.editorState,
      media, controls, contentState, language,
      addonControls, colors, fontSizes, fontFamilies
    }

    const blockRendererFn = getBlockRendererFn({
      onChange: this.onChange,
      editorState: this.state.editorState,
      getEditorState: this.getEditorState.bind(this),
      contentState: contentState,
      language: language,
      forceRender: this.forceRender.bind(this),
      setEditorProp: this.setEditorProp.bind(this)
    })

    const editorProps = {
      ref: instance => this.draftInstance = instance,
      editorState: this.state.editorState,
      handleKeyCommand: this.handleKeyCommand,
      onChange: this.onChange,
      customStyleMap: getCustomStyleMap({ colors, fontSizes, fontFamilies }),
      blockRenderMap: extendedBlockRenderMap,
      blockStyleFn: blockStyleFn,
      blockRendererFn: blockRendererFn,
      ...this.state.editorProps
    }

    return (
      <div className="BraftEditor-container">
        <ControlBar {...controlBarProps}/>
        <div
          className="BraftEditor-content"
          style = {{height: height|| defaultOptions.height}}
        >
          <Editor { ...editorProps }/>
        </div>
      </div>
    )
  }

}