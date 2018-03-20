import './style.scss'
import React from 'react'
import getSupportedControls from 'configs/controls'
import LinkEditor from 'components/business/LinkEditor'
import HeadingPicker from 'components/business/Headings'
import TextColorPicker from 'components/business/TextColor'
import FontSizePicker from 'components/business/FontSize'
import LineHeightPicker from 'components/business/LineHeight'
import FontFamilyPicker from 'components/business/FontFamily'
import TextAlign from 'components/business/TextAlign'
import EmojiPicker from 'components/business/EmojiPicker'
import MediaPicker from 'components/business/MediaPicker'
import LetterSpacingPicker from 'components/business/letterSpacing'
import IndentPicker from 'components/business/indent'
import DropDown from 'components/common/DropDown'
import { showModal } from 'components/common/Modal'
export default class ControlBar extends React.Component {

  mediaPicker = null
  videoPicker = null
  audioPicker = null
  extendedModals = {}

  componentDidUpdate () {

    const { extendControls, language } = this.props

    extendControls.forEach(item => {
      if (item.type === 'modal') {
        if (item.modal && item.modal.id && this.extendedModals[item.modal.id]) {
          this.extendedModals[item.modal.id].update({ ...item.modal, language })
        }
      }
    })

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

  render() {

    const { editor, controls, media, extendControls, language, colors, tempColors, fontSizes, fontFamilies, emojis, viewWrapper, lineHeights, letterSpacings, editorHeight, textAlignOptions, allowSetTextBackgroundColor, indents} = this.props
    const currentBlockType = editor.getSelectionBlockType()
    const supportedControls = getSupportedControls(language)
    const commonProps = { editor, editorHeight, language, viewWrapper }
    const renderedExtendControls = extendControls.map((item, index) => {
      if (item.type === 'split') {
        return <span key={controls.length * 2 + index} className="split-line"></span>
      } else if (item.type === 'dropdown') {
        let { disabled, autoHide, html, text, className, showDropDownArrow, hoverTitle, component, arrowActive, ref } = item
        return (
          <DropDown
            key={index}
            className={"control-item dropdown " + className}
            caption={text}
            editorHeight={editorHeight}
            htmlCaption={html}
            showDropDownArrow={showDropDownArrow}
            viewWrapper={viewWrapper}
            hoverTitle={hoverTitle}
            arrowActive={arrowActive}
            autoHide={autoHide}
            disabled={disabled}
            ref={ref}
          >
            {component}
          </DropDown>
        )
      } else if (item.type === 'modal') {
        return (
          <button
            type="button"
            key={controls.length * 2 + index}
            title={item.hoverTitle}
            className={'control-item button ' + item.className}
            dangerouslySetInnerHTML={item.html ? { __html: item.html } : null}
            onClick={() => {
              if (item.modal && item.modal.id) {
                if (this.extendedModals[item.modal.id]) {
                  this.extendedModals[item.modal.id].active = true
                  this.extendedModals[item.modal.id].update({ ...item.modal, language })
                } else {
                  this.extendedModals[item.modal.id] = showModal({ ...item.modal, language })
                }
              }
            }}
          >
            {!item.html ? item.text : null}
          </button>
        )
      } else if (item.type === 'component') {
        return (
          <div
            key={controls.length * 2 + index}
            className={'control-item component-wrapper ' + item.className}
          >{item.component}</div>
        )
      } else {
        return (
          <button
            type="button"
            key={controls.length * 2 + index}
            title={item.hoverTitle}
            className={'control-item button ' + item.className}
            dangerouslySetInnerHTML={item.html ? { __html: item.html } : null}
            onClick={() => item.onClick()}
          >
            {!item.html ? item.text : null}
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
          {...commonProps}
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
                {...commonProps}
              />
            } else if (controlItem.type === 'text-color') {
              return <TextColorPicker
                key={index}
                colors={colors}
                tempColors={tempColors}
                allowSetTextBackgroundColor={allowSetTextBackgroundColor}
                {...commonProps}
              />
            } else if (controlItem.type === 'font-size') {
              return <FontSizePicker
                key={index}
                fontSizes={fontSizes}
                defaultCaption={controlItem.title}
                {...commonProps}
              />
            } else if (controlItem.type === 'line-height') {
              return <LineHeightPicker
                key={index}
                lineHeights={lineHeights}
                defaultCaption={controlItem.title}
                {...commonProps}
              />
            } else if (controlItem.type === 'letter-spacing') {
              return <LetterSpacingPicker
                key={index}
                letterSpacings={letterSpacings}
                defaultCaption={controlItem.title}
                {...commonProps}
              />
            } else if (controlItem.type === 'indent') {
              return <IndentPicker
                key={index}
                indents={indents}
                defaultCaption={controlItem.title}
                {...commonProps}
              />
            } else if (controlItem.type === 'font-family') {
              return <FontFamilyPicker
                key={index}
                fontFamilies={fontFamilies}
                defaultCaption={controlItem.title}
                {...commonProps}
              />
            } else if (controlItem.type === 'emoji') {
              return <EmojiPicker
                key={index}
                emojis={emojis}
                defaultCaption={controlItem.text}
                {...commonProps}
              />
            } else if (controlItem.type === 'link') {
              return <LinkEditor
                key={index}
                {...commonProps}
              />
            } else if (controlItem.type === 'text-align') {
              return (
                <TextAlign
                  key={index}
                  textAlignOptions={textAlignOptions}
                  {...commonProps}
                />
              )
            } else if (controlItem.type === 'media') {
              if (!media.image && !media.video && !media.audio) {
                return null
              }
              return (
                <button
                  type="button"
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
                  type="button"
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
        {renderedExtendControls}
      </div>
    )

  }

}