import './style.scss'
import React from 'react'
import getEditorControls from 'configs/controls'
import LinkEditor from 'components/business/LinkEditor'
import HeadingPicker from 'components/business/Headings'
import TextColorPicker from 'components/business/TextColor'
import FontSizePicker from 'components/business/FontSize'
import LineHeightPicker from 'components/business/LineHeight'
import FontFamilyPicker from 'components/business/FontFamily'
import TextAlign from 'components/business/TextAlign'
import EmojiPicker from 'components/business/EmojiPicker'
import LetterSpacingPicker from 'components/business/LetterSpacing'
import TextIndent from 'components/business/TextIndent'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'
import { showModal } from 'components/common/Modal'
import { getExtensionControls } from 'helpers/extension'

const commandHookMap = {
  'inline-style': 'toggle-inline-style',
  'block-type': 'change-block-type',
  'editor-method': 'exec-editor-command'
}

const exclusiveInlineStyles = {
  'superscript': 'subscript',
  'subscript': 'superscript'
}

const mergeControls = (commonProps, builtControls, extensionControls, extendControls) => {

  extensionControls = extensionControls.map(item => typeof item === 'function' ? item(commonProps) : item)
  extendControls = extendControls.map(item => typeof item === 'function' ? item(commonProps) : item)

  if (extensionControls.length === 0 && extendControls.length === 0) {
    return builtControls
  }

  return builtControls.map(item => {
    return extendControls.find(subItem => {
      return subItem.replace === (item.key || item)
    }) || extensionControls.find(subItem => {
      return subItem.replace === (item.key || item)
    }) || item
  }).concat(extensionControls.length ? 'separator' : '').concat(extensionControls.filter(item => {
    return !item.replace
  })).concat(extendControls.filter(item => {
    return typeof item === 'string' || !item.replace
  }))

}

export default class ControlBar extends React.Component {

  allControls = []
  mediaLibiraryModal = null
  extendedModals = {}

  componentDidUpdate () {

    const { language } = this.props

    this.allControls.forEach(item => {
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
    } else if (type === 'entity' && ContentUtils.getSelectionEntityType(this.props.editorState) === command) {
      className += ' active'
    }

    return className

  }

  applyControl (command, type, data = {}) {

    const hookReturns = this.props.hooks(commandHookMap[type] || type, command)(command)
    let editorState = this.props.editorState

    if (hookReturns === false) {
      return false
    }

    if (typeof hookReturns === 'string') {
      command = hookReturns
    }

    if (type === 'inline-style') {
      let exclusiveInlineStyle = exclusiveInlineStyles[command]
      if (exclusiveInlineStyle && ContentUtils.selectionHasInlineStyle(editorState, exclusiveInlineStyle)) {
        editorState = ContentUtils.toggleSelectionInlineStyle(editorState, exclusiveInlineStyle)
      }
      this.props.editor.setValue(ContentUtils.toggleSelectionInlineStyle(editorState, command))
    } else if (type === 'block-type') {
      this.props.editor.setValue(ContentUtils.toggleSelectionBlockType(editorState, command))
    } else if (type === 'entity') {
      this.props.editor.setValue(ContentUtils.toggleSelectionEntity(editorState, {
        type: command,
        mutability: data.mutability || 'MUTABLE',
        data: data.data || {}
      }))
    } else if (type === 'editor-method') {
      this.props.editor[command] && this.props.editor[command]()
    }

  }

  openBraftFinder = () => {

    if (!this.props.braftFinder || !this.props.braftFinder.ReactComponent) {
      return false
    }

    if (this.props.hooks('open-braft-finder')() === false) {
      return false
    }

    const mediaProps = this.props.media
    const MediaLibrary = this.props.braftFinder.ReactComponent

    this.mediaLibiraryModal = showModal({
      title: this.props.language.controls.mediaLibirary,
      language: this.props.language,
      width: 640,
      showFooter: false,
      component: (
        <MediaLibrary
          accepts={mediaProps.accepts}
          onCancel={this.closeBraftFinder}
          onInsert={this.insertMedias}
          onChange={mediaProps.onChange}
          externals={mediaProps.externals}
          onBeforeSelect={this.bindBraftFinderHook('select-medias')}
          onBeforeDeselect={this.bindBraftFinderHook('deselect-medias')}
          onBeforeRemove={this.bindBraftFinderHook('remove-medias')}
          onBeforeInsert={this.bindBraftFinderHook('insert-medias')}
          onFileSelect={this.bindBraftFinderHook('select-files')}
        />
      )
    })

  }

  bindBraftFinderHook = (hookName) => (...params) => {
    return this.props.hooks(hookName, params[0])(...params)
  }

  insertMedias = (medias) => {

    this.props.editor.setValue(ContentUtils.insertMedias(this.props.editorState, medias))
    this.props.editor.requestFocus()
    this.props.media.onInsert && this.props.media.onInsert(medias)
    this.closeBraftFinder()

  }

  closeBraftFinder = () => {

    this.props.media.onCancel && this.props.media.onCancel()
    this.mediaLibiraryModal && this.mediaLibiraryModal.close()

  }

  render() {

    const { editor, editorId, editorState, className, style, controls, media, extendControls, language, hooks, colors, colorPicker, colorPickerTheme, colorPickerAutoHide, headings, fontSizes, fontFamilies, emojis, getContainerNode, lineHeights, letterSpacings, textAligns, textBackgroundColor, allowInsertLinkText, defaultLinkTarget } = this.props
    const currentBlockType = ContentUtils.getSelectionBlockType(editorState)
    const commonProps = { editor, editorId, editorState, language, getContainerNode, hooks }

    const renderedControls = []
    const editorControls = getEditorControls(language, editor)
    const extensionControls = getExtensionControls(editorId)
    const allControls = mergeControls(commonProps, controls, extensionControls, extendControls)

    this.allControls = allControls

    return (
      <div className={`bf-controlbar ${className || ''}`} style={style} onMouseDown={this.preventDefault}>
        {
          allControls.map((item, index) => {

            let itemKey = typeof item === 'string' ? item : item.key
            if (typeof itemKey !== 'string') {
              return null
            }
            if (renderedControls.indexOf(itemKey) > -1) {
              return null
            }
            if (itemKey.toLowerCase() === 'separator') {
              return <span key={index} className='separator-line'></span>
            }
            let controlItem = editorControls.find((subItem) => {
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
                headings={headings}
                current={currentBlockType}
                onChange={(command) => this.applyControl(command, 'block-type')}
                {...commonProps}
              />
            } else if (controlItem.type === 'text-color') {
              return <TextColorPicker
                key={index}
                colors={colors}
                colorPicker={colorPicker}
                theme={colorPickerTheme}
                autoHide={colorPickerAutoHide}
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
              return <TextIndent
                key={index}
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
                defaultLinkTarget={defaultLinkTarget}
                allowInsertLinkText={allowInsertLinkText}
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
                  type='button'
                  key={index}
                  data-title={controlItem.title}
                  disabled={controlItem.disabled}
                  className='control-item media button'
                  onClick={this.openBraftFinder}
                >
                  {controlItem.text}
                </button>
              )
            } else if (controlItem.type === 'dropdown') {
              return (
                <DropDown
                  key={index}
                  className={`control-item extend-control-item dropdown ${controlItem.className || ''}`}
                  caption={controlItem.text}
                  htmlCaption={controlItem.html}
                  showArrow={controlItem.showArrow}
                  title={controlItem.title}
                  arrowActive={controlItem.arrowActive}
                  theme={controlItem.theme}
                  autoHide={controlItem.autoHide}
                  disabled={controlItem.disabled}
                  ref={controlItem.ref}
                  {...commonProps}
                >
                  {controlItem.component}
                </DropDown>
              )
            } else if (controlItem.type === 'modal') {
              return (
                <button
                  type='button'
                  key={index}
                  data-title={controlItem.title}
                  disabled={controlItem.disabled}
                  className={`control-item extend-control-item button ${controlItem.className || ''}`}
                  dangerouslySetInnerHTML={controlItem.html ? { __html: controlItem.html } : null}
                  onClick={(event) => {
                    if (controlItem.modal && controlItem.modal.id) {
                      if (this.extendedModals[controlItem.modal.id]) {
                        this.extendedModals[controlItem.modal.id].active = true
                        this.extendedModals[controlItem.modal.id].update({ ...controlItem.modal, language })
                      } else {
                        this.extendedModals[controlItem.modal.id] = showModal({ ...controlItem.modal, language })
                        controlItem.modal.onCreate && controlItem.modal.onCreate(this.extendedModals[controlItem.modal.id])
                      }
                    }
                    controlItem.onClick && controlItem.onClick(event)
                  }}
                >
                  {!controlItem.html ? controlItem.text : null}
                </button>
              )
            } else if (controlItem.type === 'component') {
              return (
                <div
                  key={index}
                  className={`component-wrapper ${controlItem.className || ''}`}
                >{controlItem.component}</div>
              )
            } else if (controlItem.type === 'button') {
              return (
                <button
                  type='button'
                  key={index}
                  data-title={controlItem.title}
                  disabled={controlItem.disabled}
                  className={`control-item button ${controlItem.className || ''}`}
                  dangerouslySetInnerHTML={controlItem.html ? { __html: controlItem.html } : null}
                  onClick={(event) => controlItem.onClick && controlItem.onClick(event)}
                >
                  {!controlItem.html ? controlItem.text : null}
                </button>
              )
            } else if (controlItem) {

              let disabled = false

              if (controlItem.command === 'undo') {
                disabled = editorState.getUndoStack().size === 0
              } else if (controlItem.command === 'redo') {
                disabled = editorState.getRedoStack().size === 0
              }

              return (
                <button
                  type='button'
                  key={index}
                  disabled={disabled}
                  data-title={controlItem.title}
                  className={this.getControlItemClassName({
                    type: controlItem.type,
                    command: controlItem.command
                  })}
                  onClick={() => this.applyControl(controlItem.command, controlItem.type, controlItem.data)}
                >
                  {controlItem.text}
                </button>
              )
            }
          })
        }
      </div>
    )

  }

  preventDefault (event) {

    const tagName = event.target.tagName.toLowerCase()

    if (tagName === 'input' || tagName === 'label') {
      // ...
    } else {
      event.preventDefault()
    }

  }

}