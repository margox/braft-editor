import './style.scss'
import React from 'react'
import Modal from 'components/common/Modal'
import { UniqueIndex } from 'utils/base'

const imageMediaType = 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg'
const videoMediaType = 'video/mp4'
const audioMediaType = 'audio/mp3'
const defaultValidateFn = () => true

export default class MediaPicker extends React.Component {

  state = {
    visible: false,
    showExternalForm: false,
    draging: false,
    error: false,
    confirmable: false,
    external: {
      url: '',
      type: [
        this.props.media.image ? 'IMAGE' : null,
        this.props.media.video ? 'VIDEO' : null,
        this.props.media.audio ? 'AUDIO' : null,
      ].filter(item => item)[0]
    },
    files: []
  }

  mediaFileAccept = [
    this.props.media.image ? imageMediaType : null,
    this.props.media.video ? videoMediaType : null,
    this.props.media.audio ? audioMediaType : null
  ].filter(item => item).join(',')

  componentDidMount () {

    this.mediaLibrary = this.props.mediaLibrary
    this.mediaLibrary.uploadFn = this.props.media.uploadFn || null
    this.validateFn = this.props.media.validateFn || defaultValidateFn
    this.mediaLibrary.onChange = (files) => {
      this.setState({
        files,
        confirmable: !!files.filter(item => item.selected).length
      })
    }

  }

  render () {

    const { media, language } = this.props
    const { files, visible, external, draging, confirmable, showExternalForm } = this.state
    const bottomText = (
      <span 
        onClick={this.toggleExternalMode}
        className="braft-media-toggle-external-mode"
      >
        {showExternalForm ? (
          <span><i className="icon-add"></i> {language.mediaPicker.addLocalFile}</span>
        ) : (
          <span><i className="icon-add"></i> {language.mediaPicker.addExternalSource}</span>
        )}
      </span>
    )

    return (
      <Modal
        title={language.mediaPicker.caption}
        width={640}
        visible={visible}
        language={language}
        className="braft-media-picker-modal"
        bottomText={bottomText}
        confirmable={confirmable && !showExternalForm}
        onClose={this.hide}
        onCancel={this.hide}
        onConfirm={this.confirmInsertMedia}
      >
        <div className="braft-media-picker">
          <div className="braft-media-uploader">
          {files.length ? (
            <div className="braft-media-list-wrap">
              {this.buildMediaList()}
            </div>
          ) : (
            <div
              onDragEnter={this.handleDragEnter}
              onDragLeave={this.handleDragLeave}
              className={"braft-media-drag-uploader " + (draging ? 'active' : '')}
            >
              <span className="braft-media-drag-tip">
                <input accept={this.mediaFileAccept} onChange={this.handleFilesPicked} multiple type="file"/>
                {draging ? language.mediaPicker.dropTip : language.mediaPicker.dragTip}
              </span>
            </div>
          )}
          {showExternalForm ? (
            <div className="braft-media-add-external">
              <div className="braft-media-external-form">
                <input onKeyDown={this.confirmAddExternal} value={external.url} onChange={this.inputExternal} placeholder={language.mediaPicker.externalInputPlaceHolder}/>
                <div data-type={external.type} className="braft-media-switch-external-type">
                  <button onClick={this.switchExternalType} data-type="IMAGE">{language.media.image}</button>
                  <button onClick={this.switchExternalType} data-type="VIDEO">{language.media.video}</button>
                  <button onClick={this.switchExternalType} data-type="AUDIO">{language.media.audio}</button>
                </div>
                <span className="braft-media-external-tip">{language.mediaPicker.externalInputTip}</span>
              </div>
            </div>
          ) : null}
          </div>
        </div>
      </Modal>
    )

  }

  buildMediaList () {

    return (
      <ul className="braft-media-list">
        <li className="braft-media-add-item">
          <i className="icon-add"></i>
          <input accept={this.mediaFileAccept} onChange={this.handleFilesPicked} multiple type="file"/>
        </li>
        {this.state.files.map((file, index) => {

          let previewerComponents = null
          let progressMarker = file.uploading ? (
            <div className="braft-media-item-uploading">
              <div className="braft-media-item-uploading-bar" style={{width: file.uploadProgress / 1 + '%'}}></div>
            </div>
          ) : ''

          switch (file.type) {
            case 'IMAGE': 
              previewerComponents = (
                <div className="braft-media-image">
                  {progressMarker}
                  <img src={file.thumbnail} />
                </div>
              )
            break
            case 'VIDEO':
              previewerComponents = (
                <div className="braft-media-icon braft-media-video" title={file.url}>
                  {progressMarker}
                  <i className="icon-film"></i>
                  <span>{file.name || file.url}</span>
                </div>
              )
            break
            case 'AUDIO':
              previewerComponents = (
                <div className="braft-media-icon braft-media-audio" title={file.url}>
                  {progressMarker}
                  <i className="icon-music"></i>
                  <span>{file.name || file.url}</span>
                </div>
              )
            break
            default:
              previewerComponents = (
                <a className="braft-media-icon braft-media-file" title={file.url} href={file.url}>
                  {progressMarker}
                  <i className="icon-file-text"></i>
                  <span>{file.name || file.url}</span>
                </a>
              )
            break 
          }

          let className = ['braft-media-item']
          file.selected && className.push('active')
          file.uploading && className.push('uploading')
          file.error && className.push('error')

          return (
            <li
              key={index}
              title={file.name}
              className={className.join(' ')}
              onClick={() => this.toggleFileSelected(file)}
            >
              {previewerComponents}
              <span data-id={file.id} onClick={this.removeFileItem} className="braft-media-item-remove icon-close"></span>
              <span className="braft-media-item-title">{file.name}</span>
            </li>
          )

        })}
      </ul>
    )

  }

  toggleFileSelected = (file) => {

    let { id, selected, error, uploading } = file

    if (error || uploading) {
      return false
    }

    selected = !selected
    this.mediaLibrary.setItemState(id, { selected })

  }

  removeFileItem = (e) => {
    this.mediaLibrary.removeItem(e.target.dataset.id)
    e.stopPropagation()
  }

  handleDragLeave = (e) => {
    this.setState({
      draging: false
    })
  }

  handleDragEnter = (e) => {
    this.setState({
      draging: true
    })
  }

  handleFilesPicked = (e) => {

    let index = 0
    let { files } = e.target
    let length = files.length

    e.persist()

    const resolveFile = (index) => {

      if (index < length) {

        if (this.validateFn(files[index])) {

          let data = {
            id: new Date().getTime() + '_' + UniqueIndex(),
            file: files[index],
            name: files[index].name,
            size: files[index].size,
            uploadProgress: 0,
            uploading: false,
            selected: false,
            error: 0
          }

          if (files[index].type.indexOf('image/') === 0 && this.props.media.image) {
            data.type = 'IMAGE'
            this.mediaLibrary.addItems([data])
          } else if (files[index].type.indexOf('video/') === 0 && this.props.media.video) {
            data.type = 'VIDEO'
            this.mediaLibrary.addItems([data])
          } else if (files[index].type.indexOf('audio/') === 0 && this.props.media.audio) {
            data.type = 'AUDIO'
            this.mediaLibrary.addItems([data])
          }

        }

        setTimeout(() => {
          resolveFile(index + 1)
        }, 100)

      } else {
        e.target.value = null
      }

    }

    resolveFile(0)

  }

  inputExternal = (e) => {
    this.setState({
      external: {
        ...this.state.external,
        url: e.target.value
      }
    })
  }

  switchExternalType = (e) => {
    this.setState({
      external: { ...this.state.external, type: e.target.dataset.type }
    })
  }

  confirmAddExternal = (e) => {
    if (e.keyCode === 13) {
      let { url, type } = this.state.external
      url = url.split('|')
      let name = url.length > 1 ? url[0] : this.props.language.mediaPicker.unnamedItem
      url = url.length > 1 ? url[1] : url[0]
      let thumbnail = type === 'IMAGE' ? url : null
      this.mediaLibrary.addItems([{
        thumbnail, url, name, type,
        id: new Date().getTime() + '_' + UniqueIndex(),
        uploading: false,
        uploadProgress: 1,
        selected: true
      }])
      this.setState({
        showExternalForm: false,
        external: {
          url: '',
          type: 'IMAGE'
        }
      })
    }
  }

  toggleExternalMode = () => {
    this.setState({
      showExternalForm: !this.state.showExternalForm,
    })
  }

  confirmInsertMedia = () => {
    this.props.editor.insertMedias(this.state.files.filter(item => item.selected))
    this.hide()
  }

  show = () => {
    this.setState({
      visible: true
    })
  }

  hide = () => {
    this.setState({
      visible: false
    }, () => {
      this.mediaLibrary.unselectAllItem()
    })
  }

}