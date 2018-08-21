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
import LetterSpacingPicker from 'components/business/LetterSpacing'
import TextIndentPicker from 'components/business/TextIndent'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'
import { showModal } from 'components/common/Modal'

export default class ControlBar extends React.Component {

  mediaLibiraryModal = null
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

    if (type === 'inline-style' && ContentUtils.selectionHasInlineStyle(this.props.editorState, command)) {
      className += ' active'
    } else if (type === 'block-type' && ContentUtils.getSelectionBlockType(this.props.editorState) === command) {
      className += ' active'
    }

    return className

  }

  applyControl (command, type) {

    if (type === 'inline-style') {
      this.props.editor.setValue(ContentUtils.toggleSelectionInlineStyle(this.props.editorState, command))
    } else if (type === 'block-type') {
      this.props.editor.setValue(ContentUtils.toggleSelectionBlockType(this.props.editorState, command))
    } else if (type === 'editor-method') {
      this.props.editor[command] && this.props.editor[command]()
    }

    this.props.editor.requestFocus()

  }

  openMediaLibrary = () => {

    if (!this.props.braftFinder || !this.props.braftFinder.ReactComponent) {
      return false
    }

    const mediaProps = this.props.media
    const MediaLibrary = this.props.braftFinder.ReactComponent
    const { onBeforeDeselect, onDeselect, onBeforeSelect, onSelect, onBeforeRemove, onRemove, onFileSelect, onBeforeInsert, onChange } = mediaProps

    this.mediaLibiraryModal = showModal({
      title: this.props.language.controls.mediaLibirary,
      language: this.props.language,
      width: 640,
      showFooter: false,
      children: (
        <MediaLibrary
          onCancel={this.closeMediaLibrary}
          onInsert={this.insertMedias}
          externals={mediaProps.externals}
          {...{onBeforeDeselect, onDeselect, onBeforeSelect, onSelect, onBeforeRemove, onRemove, onFileSelect, onBeforeInsert, onChange}}
        />
      )
    })

  }

  insertMedias = (medias) => {
    this.props.editor.setValue(ContentUtils.insertMedias(this.props.editorState, medias))
    this.props.editor.requestFocus()
    this.props.media.onInsert && this.props.media.onInsert(medias)
    this.closeMediaLibrary()
  }

  closeMediaLibrary = () => {
    this.props.media.onCancel && this.props.media.onCancel()
    this.mediaLibiraryModal && this.mediaLibiraryModal.close()
  }

  render() {

    const { editor, editorState, controls, media, extendControls, language, hooks, colors, fontSizes, fontFamilies, emojis, containerNode, lineHeights, letterSpacings, textAligns, textBackgroundColor, textIndents} = this.props
    const currentBlockType = ContentUtils.getSelectionBlockType(editorState)
    const supportedControls = getSupportedControls(language)
    const commonProps = { editor, editorState, language, containerNode, hooks }

    const renderedExtendControls = extendControls.map((item, index) => {
      if (item.type === 'separator') {
        return <span key={controls.length * 2 + index} className="separator-line"></span>
      } else if (item.type === 'dropdown') {
        let { disabled, autoHide, html, text, className, showDropDownArrow, hoverTitle, component, arrowActive, ref } = item
        return (
          <DropDown
            key={index}
            className={"control-item dropdown " + className}
            caption={text}
            htmlCaption={html}
            showDropDownArrow={showDropDownArrow}
            containerNode={containerNode}
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
            onClick={(event) => {
              if (item.modal && item.modal.id) {
                if (this.extendedModals[item.modal.id]) {
                  this.extendedModals[item.modal.id].active = true
                  this.extendedModals[item.modal.id].update({ ...item.modal, language })
                } else {
                  this.extendedModals[item.modal.id] = showModal({ ...item.modal, language })
                  item.modal.onCreate && item.modal.onCreate(this.extendedModals[item.modal.id])
                }
              }
              item.onClick && item.onClick(event)
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
            onClick={(event) => item.onClick && item.onClick(event)}
          >
            {!item.html ? item.text : null}
          </button>
        )
      }
    })

    const renderedControls = []

    return (
      <div className="BraftEditor-controlBar">
        {
          controls.map((item, index) => {
            let itemKey = typeof item === 'string' ? item : item.key
            if (typeof itemKey !== 'string') {
              return null
            }
            if (renderedControls.indexOf(itemKey) > -1) {
              return null
            }
            if (itemKey.toLowerCase() === 'separator') {
              return <span key={index} className="separator-line"></span>
            }
            let controlItem = supportedControls.find((subItem) => {
              return subItem.key.toLowerCase() === itemKey.toLowerCase()
            })
            if (typeof item !== 'string') {
              controlItem = { ...controlItem, ...item }
            }
            if (!controlItem) {
              return null
            }
            renderedControls.push(itemKey)
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
                enableBackgroundColor={textBackgroundColor}
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
            } else if (controlItem.type === 'text-indent') {
              return <TextIndentPicker
                key={index}
                textIndents={textIndents}
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
                  textAligns={textAligns}
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
                  onClick={this.openMediaLibrary}
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