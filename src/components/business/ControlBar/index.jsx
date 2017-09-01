import './style.scss'
import React from 'react'
import { RichUtils, EditorState } from 'draft-js'
import getSupportedControls from 'configs/controls'
import LinkEditor from 'components/business/LinkEditor'
import HeadingPicker from 'components/business/Headings'
import TextColorPicker from 'components/business/TextColor'
import FontSizePicker from 'components/business/FontSize'
import FontFamilyPicker from 'components/business/FontFamily'
import TextAlign from 'components/business/TextAlign'
import EmojiPicker from 'components/business/EmojiPicker'
import MediaPicker from 'components/business/MediaPicker'

export default class ControlBar extends React.Component {

  mediaPicker = null
  videoPicker = null
  audioPicker = null

  render () {

    const { controls, editorState, contentState, media, addonControls, language, colors, tempColors, fontSizes, fontFamilies, emojis, viewWrapper, mediaLibrary, forceRender } = this.props
    const selection = editorState.getSelection()
    const currentInlineStyle = editorState.getCurrentInlineStyle()
    const currentBlockType = contentState.getBlockForKey(selection.getStartKey()).getType()
    const supportedControls = getSupportedControls(language)
    const commonProps = { language, editorState, contentState, currentInlineStyle, selection, viewWrapper, forceRender }

    const renderedAddonControls = addonControls.map((addonControlItem, index) => {
      if (addonControlItem.type === 'split') {
        return <span key={controls.length + index} className="split-line"></span>
      } else {
        return (
          <button
            key={controls.length + index}
            title={addonControlItem.title}
            className={'control-item button ' + addonControlItem.className}
            onClick={() => addonControlItem.onClick(editorState)}
          >
          {addonControlItem.text}
          </button>
        )
      }
    })

    return (
      <div className="BraftEditor-controlBar">
        <MediaPicker
          media={media}
          ref={(instance) => this.mediaPicker = instance}
          onChange={this.applyEditorState}
          mediaLibrary={mediaLibrary}
          { ...commonProps }
        />
        {
          controls.map((item, index) => {

            if (item.toLowerCase() === 'split') {
              return <span key={index} className="split-line"></span>
            }

            let controlItem = supportedControls.find((subItem) => {
              return subItem.key.toLowerCase() === item.toLowerCase()
            })

            if (!controlItem) {
              return null
            }

            if (controlItem.type === 'headings') {

              return <HeadingPicker
                key={index}
                current={currentBlockType}
                onChange={(command) => this.applyControl(command, 'block-type')}
                { ...commonProps }
              />

            } else if (controlItem.type === 'text-color') {

              return <TextColorPicker
                key={index}
                colors={colors}
                tempColors={tempColors}
                onChange={this.applyEditorState}
                { ...commonProps }
              />

            } else if (controlItem.type === 'font-size') {

              return <FontSizePicker
                key={index}
                fontSizes={fontSizes}
                defaultCaption={controlItem.title}
                onChange={this.applyEditorState}
                { ...commonProps }
              />

            } else if (controlItem.type === 'font-family') {

              return <FontFamilyPicker
                key={index}
                fontFamilies={fontFamilies}
                defaultCaption={controlItem.title}
                onChange={this.applyEditorState}
                { ...commonProps }
              />

            } else if (controlItem.type === 'emoji') {

              return <EmojiPicker
                key={index}
                emojis={emojis}
                defaultCaption={controlItem.text}
                onChange={this.applyEditorState}
                { ...commonProps }
              />

            } else if (controlItem.type === 'link') {

              return <LinkEditor
                key={index}
                onChange={this.applyEditorState}
                { ...commonProps }
              />

            } else if (controlItem.type === 'text-align') {

              return (
                <TextAlign
                  key={index}
                  onChange={this.applyEditorState}
                  { ...commonProps }
                />
              )

            } else if (controlItem.type === 'media') {

              if (!media.image && !media.video && !media.audio) {
                return null
              }

              return (
                <button
                  key={index}
                  title={controlItem.title}
                  className='control-item button'
                  onClick={this.showMediaPicker}
                >
                  {controlItem.text}
                </button>
              )

            } else {

              let buttonClassName = this.getControlItemClassName({
                type: controlItem.type,
                command: controlItem.command,
                currentBlockType, currentInlineStyle
              })

              return (
                <button
                  key={index}
                  title={controlItem.title}
                  className={buttonClassName}
                  onClick={() => this.applyControl(controlItem.command, controlItem.type)}
                >
                  {controlItem.text}
                </button>
              )
  
            }

          })
        }
        {renderedAddonControls}
      </div>
    )

  }

  getControlItemClassName (data) {

    let className = 'control-item button'
    let { type, command, currentBlockType, currentInlineStyle } = data

    if (type === 'inline-style') {
      if (currentInlineStyle.has(command.toUpperCase())) {
        className += ' active'
      }
    } else if (type === 'block-type') {
      if (currentBlockType === command) {
        className += ' active'
      }
    }

    return className

  }

  applyControl (command, type) {

    if (type === 'inline-style') {
      this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, command.toUpperCase()))
    } else if (type === 'block-type') {
      this.props.onChange(RichUtils.toggleBlockType(this.props.editorState, command))
    } else if (type === 'editor-state-method') {
      this.props.onChange(EditorState[command](this.props.editorState))
    }

    setImmediate(() => {
      this.props.editor.focus()
    })

  }

  applyEditorState = (editorState) => {
    this.props.onChange(editorState)
    setImmediate(() => {
      this.props.editor.focus()
    })
  }

  showMediaPicker = () => {
    this.mediaPicker.show()
  }

}