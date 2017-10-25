import './style.scss'
import React from 'react'
import getSupportedControls from 'configs/controls'
import LinkEditor from 'components/business/LinkEditor'
import HeadingPicker from 'components/business/Headings'
import TextColorPicker from 'components/business/TextColor'
import FontSizePicker from 'components/business/FontSize'
import FontFamilyPicker from 'components/business/FontFamily'
import TextAlign from 'components/business/TextAlign'
import EmojiPicker from 'components/business/EmojiPicker'
import MediaPicker from 'components/business/MediaPicker'
import DropDown from 'components/common/DropDown'
import { showModal } from 'components/common/Modal'

export default class ControlBar extends React.Component {

  mediaPicker = null
  videoPicker = null
  audioPicker = null

  render () {

    const { editor, controls, media, extendControls, language, colors, tempColors, fontSizes, fontFamilies, emojis, viewWrapper } = this.props
    const currentBlockType = editor.getSelectionBlockType()
    const supportedControls = getSupportedControls(language)
    const commonProps = { editor, language, viewWrapper }

    const renderedextendControls = extendControls.map((item, index) => {

      if (item.type === 'split') {
        return <span key={controls.length * 2 + index} className="split-line"></span>
      } else if (item.type === 'dropdown') {

        let { text, className, showDropDownArrow, hoverTitle, component } = item

        return (
          <DropDown
            key={index}
            className={"control-item dropdown " + className}
            caption={text}
            showDropDownArrow={showDropDownArrow}
            viewWrapper={viewWrapper}
            hoverTitle={hoverTitle}
          >
            {component}
          </DropDown>
        )

      } else if (item.type === 'modal') {

        return (
          <button
            key={controls.length * 2 + index}
            title={item.title}
            className={'control-item button ' + item.className}
            onClick={() => {
              item.modal && showModal({
                ...item.modal, language
              })
            }}
          >
          {item.text}
          </button>
        )

      } else {

        return (
          <button
            key={controls.length * 2 + index}
            title={item.title}
            className={'control-item button ' + item.className}
            onClick={() => item.onClick()}
          >
          {item.text}
          </button>
        )

      }

    })

    return (
      <div className="BraftEditor-controlBar">
        <MediaPicker
          media={media}
          ref={(instance) => this.mediaPicker = instance}
          mediaLibrary={editor.mediaLibrary}
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
                { ...commonProps }
              />

            } else if (controlItem.type === 'font-size') {

              return <FontSizePicker
                key={index}
                fontSizes={fontSizes}
                defaultCaption={controlItem.title}
                { ...commonProps }
              />

            } else if (controlItem.type === 'font-family') {

              return <FontFamilyPicker
                key={index}
                fontFamilies={fontFamilies}
                defaultCaption={controlItem.title}
                { ...commonProps }
              />

            } else if (controlItem.type === 'emoji') {

              return <EmojiPicker
                key={index}
                emojis={emojis}
                defaultCaption={controlItem.text}
                { ...commonProps }
              />

            } else if (controlItem.type === 'link') {

              return <LinkEditor
                key={index}
                { ...commonProps }
              />

            } else if (controlItem.type === 'text-align') {

              return (
                <TextAlign
                  key={index}
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
                command: controlItem.command
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
        {renderedextendControls}
      </div>
    )

  }

  getControlItemClassName (data) {

    let className = 'control-item button'
    let { type, command } = data

    if (type === 'inline-style' && this.props.editor.selectionHasInlineStyle(command)) {
      className += ' active'
    } else if (type === 'block-type' && this.props.editor.getSelectionBlockType() === command) {
      className += ' active'
    }

    return className

  }

  applyControl (command, type) {

    if (type === 'inline-style') {
      this.props.editor.toggleSelectionInlineStyle(command)
    } else if (type === 'block-type') {
      this.props.editor.toggleSelectionBlockType(command)
    } else if (type === 'editor-state-method') {
      this.props.editor[command] && this.props.editor[command]()
    }

    window.setImmediate(() => {
      this.props.editor.focus()
    })

  }

  showMediaPicker = () => {
    this.mediaPicker.show()
  }

}