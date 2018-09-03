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
import TextIndentPicker from 'components/business/TextIndent'
import DropDown from 'components/common/DropDown'
import { ContentUtils } from 'braft-utils'
import { showModal } from 'components/common/Modal'

const commandHookMap = {
  'inline-style': 'toggle-inline-style',
  'block-type': 'change-block-type',
  'editor-method': 'exec-editor-command'
}

export default class ControlBar extends React.Component {

  mediaLibiraryModal = null
  extendedModals = {}

  componentDidUpdate () {

    const { controls, language } = this.props

    controls.forEach(item => {
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

    const hookReturns = this.props.hooks(commandHookMap[type] || type, command)(command)

    if (hookReturns === false) {
      return false
    }

    if (typeof hookReturns === 'string') {
      command = hookReturns
    }

    if (type === 'inline-style') {
      this.props.editor.setValue(ContentUtils.toggleSelectionInlineStyle(this.props.editorState, command))
    } else if (type === 'block-type') {
      this.props.editor.setValue(ContentUtils.toggleSelectionBlockType(this.props.editorState, command))
    } else if (type === 'editor-method') {
      this.props.editor[command] && this.props.editor[command]()
    }

    this.props.editor.requestFocus()

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
      children: (
        <MediaLibrary
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

    const { editor, editorState, controls, media, extendControls, language, hooks, colors, fontSizes, fontFamilies, emojis, containerNode, lineHeights, letterSpacings, textAligns, textBackgroundColor, textIndents} = this.props
    const currentBlockType = ContentUtils.getSelectionBlockType(editorState)
    const editorControls = getEditorControls(language)
    const commonProps = { editor, editorState, language, containerNode, hooks }
    const renderedControls = []

    return (
      <div className='bf-controlbar'>
        {
          [
            ...controls,
            ...extendControls
          ].map((item, index) => {
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
                  type='button'
                  key={index}
                  data-title={controlItem.title}
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
                  className={'control-item extend-control-item dropdown ' + controlItem.className}
                  caption={controlItem.text}
                  htmlCaption={controlItem.html}
                  showArrow={controlItem.showArrow}
                  containerNode={controlItem.containerNode}
                  title={controlItem.title}
                  arrowActive={controlItem.arrowActive}
                  autoHide={controlItem.autoHide}
                  disabled={controlItem.disabled}
                  ref={controlItem.ref}
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
                  className={'control-item extend-control-item button ' + controlItem.className}
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
                  className={'control-item component-wrapper ' + controlItem.className}
                >{controlItem.component}</div>
              )
            } else if (controlItem.type === 'button') {
              return (
                <button
                  type='button'
                  key={index}
                  data-title={controlItem.title}
                  className={'control-item button ' + controlItem.className}
                  dangerouslySetInnerHTML={controlItem.html ? { __html: controlItem.html } : null}
                  onClick={(event) => controlItem.onClick && controlItem.onClick(event)}
                >
                  {!controlItem.html ? controlItem.text : null}
                </button>
              )
            } else {
              return (
                <button
                  type='button'
                  key={index}
                  data-title={controlItem.title}
                  className={this.getControlItemClassName({
                    type: controlItem.type,
                    command: controlItem.command
                  })}
                  onClick={() => this.applyControl(controlItem.command, controlItem.type)}
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

}