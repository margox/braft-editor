import './style.scss'
import React from 'react'
import { AtomicBlockUtils, EditorState } from 'draft-js'
import Modal from 'components/common/Modal'
import Uploader from 'helpers/uploader'
import { UniqueIndex } from 'utils/base'

export default class MediaPicker extends React.Component {

  state = {
    visible: false,
    showExternalForm: false,
    draging: false,
    error: false,
    confirmable: false,
    external: {
      url: '',
      type: 'IMAGE'
    },
    files: []
  }

  componentDidMount () {

    this.uploader = new Uploader()
    this.uploader.uploadFn = this.props.uploadFn || null
    this.uploader.onChange = (files) => {
      this.setState({
        files,
        confirmable: !!files.filter(item => item.selected).length
      })
    }

  }

  render () {

    const { files, visible, external, draging, confirmable, showExternalForm } = this.state
    const bottomText = (
      <span 
        onClick={() => this.toggleExternalMode()}
        className="braft-media-toggle-external-mode"
      >
        {showExternalForm ? (
          <span><i className="icon-add"></i> 添加本地文件</span>
        ) : (
          <span><i className="icon-add"></i> 添加网络资源</span>
        )}
      </span>
    )

    return (
      <Modal
        title={"插入多媒体内容"}
        width={640}
        height={480}
        visible={visible}
        className="braft-media-picker-modal"
        showClose={true}
        showCancel={true}
        bottomText={bottomText}
        confirmable={confirmable && !showExternalForm}
        onClose={() => this.hide()}
        onCancel={() => this.hide()}
        onConfirm={() => this.confirmInsertMedia()}
      >
        <div className="braft-media-picker">
          <div className="braft-media-uploader">
          {files.length ? (
            <div className="braft-media-list-wrap">
              {this.buildMediaList()}
            </div>
          ) : (
            <div
              onDragEnter={(e) => this.handleDragEnter(e)}
              onDragLeave={(e) => this.handleDragLeave(e)}
              className={"braft-media-drag-uploader " + (draging ? 'active' : '')}
            >
              <span className="braft-media-drag-tip">
                <input onChange={(e) => this.handleFilesPicked(e.target.files)} multiple type="file"/>
                {draging ? '松开鼠标以上传' : '点击或拖动文件至此'}
              </span>
            </div>
          )}
          {showExternalForm ? (
            <div className="braft-media-add-external">
              <div className="braft-media-external-form">
                <input onKeyDown={(e) => this.confirmAddExternal(e.keyCode)} value={external.url} onChange={(e) => this.inputExternal(e.target.value)} placeholder="资源名称|资源地址"/>
                <div data-type={external.type} className="braft-media-switch-external-type">
                  <button onClick={() => this.switchExternalType('IMAGE')} data-type="IMAGE">图片</button>
                  <button onClick={() => this.switchExternalType('VIDEO')} data-type="VIDEO">视频</button>
                  <button onClick={() => this.switchExternalType('AUDIO')} data-type="AUDIO">音频</button>
                  <button onClick={() => this.switchExternalType('FILE')} data-type="FILE">其他</button>
                </div>
                <span className="braft-media-external-tip">以竖线符(|)分隔资源名称和资源地址，输入后请按回车</span>
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
          <input onChange={(e) => this.handleFilesPicked(e.target.files)} multiple type="file"/>
        </li>
        {this.state.files.map((file, index) => {
          let previewerComponents = null
          switch (file.type) {
            case 'IMAGE': 
              previewerComponents = <img className="braft-media-image" src={file.thumbnail} />
            break
            case 'VIDEO':
              previewerComponents = (
                <div className="braft-media-icon braft-media-video" title={file.url}>
                  <i className="icon-film"></i>
                  <span>{file.name || file.url}</span>
                </div>
              )
            break
            case 'AUDIO':
              previewerComponents = (
                <div className="braft-media-icon braft-media-audio" title={file.url}>
                  <i className="icon-music"></i>
                  <span>{file.name || file.url}</span>
                </div>
              )
            break
            case 'FILE': 
              previewerComponents = (
                <a className="braft-media-icon braft-media-file" title={file.url} href={file.url}>
                  <i className="icon-file-text"></i>
                  <span>{file.name || file.url}</span>
                </a>
              )
            break
            default:
              previewerComponents = (
                <a className="braft-media-icon braft-media-file" title={file.url} href={file.url}>
                  <i className="icon-file-text"></i>
                  <span>{file.name || file.url}</span>
                </a>
              )
            break 
          }
          return (
            <li
              key={index}
              title={file.name}
              className={'braft-media-item ' + (file.selected ? 'active' : '')}
              onClick={() => this.toggleFileSelected(file.id, !file.selected)}
            >
              {previewerComponents}
              <span onClick={(e) => this.removeFileItem(e, file.id)} className="braft-media-item-remove icon-close"></span>
              <span className="braft-media-item-title">{file.name}</span>
            </li>
          )
        })}
      </ul>
    )

  }

  toggleFileSelected (id, selected) {
    this.uploader.setItemState(id, { selected })
  }

  removeFileItem (e, id) {
    this.uploader.removeItem(id)
    e.stopPropagation()
  }

  handleDragLeave (e) {
    this.setState({
      draging: false
    })
  }

  handleDragEnter (e) {
    this.setState({
      draging: true
    })
  }

  handleFilesPicked (files) {

    let index = 0
    let length = files.length

    const resolveFile = (index) => {

      if (index < length) {

        let data = {
          id: new Date().getTime() + '_' + UniqueIndex(),
          file: files[index],
          name: files[index].name,
          size: files[index].size,
          progress: 0,
          uploading: false,
          selected: false,
          error: 0
        }

        if (files[index].type.indexOf('image/') === 0) {
          data.type = 'IMAGE'
        } else if (files[index].type.indexOf('video/') === 0) {
          data.type = 'VIDEO'
        } else if (files[index].type.indexOf('audio/') === 0) {
          data.type = 'AUDIO'
        } else {
          data.type = 'FILE'
        }

        this.uploader.addItems([data])
        setTimeout(() => {
          resolveFile(index + 1)
        }, 100)

      }

    }

    resolveFile(0)

  }

  inputExternal (url) {
    this.setState({
      external: { ...this.state.external, url }
    })
  }

  switchExternalType (type) {
    this.setState({
      external: { ...this.state.external, type }
    })
  }

  confirmAddExternal (keyCode) {
    if (keyCode === 13) {
      let { url, type } = this.state.external
      url = url.split('|')
      let name = url.length > 1 ? url[0] : '未命名项目'
      url = url.length > 1 ? url[1] : url[0]
      let thumbnail = type === 'IMAGE' ? url : null
      this.uploader.addItems([{
        thumbnail, url, name, type,
        id: new Date().getTime() + '_' + UniqueIndex(),
        uploading: false,
        progress: 1,
        selected: false
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

  toggleExternalMode () {
    this.setState({
      showExternalForm: !this.state.showExternalForm,
    })
  }

  confirmInsertMedia () {

    const { editorState, contentState, onChange } = this.props
    const selectedFiles = this.state.files.filter(item => item.selected)

    if (selectedFiles.length === 0) {
      return false
    }

    let newEditorState = editorState

    selectedFiles.forEach((file) => {

      let entityData = {
        url: file.url,
        name: file.name,
        type: file.type,
        meta: file.meta
      }

      let contentStateWithEntity = contentState.createEntity(file.type, 'IMMUTABLE', entityData)
      let entityKey = contentStateWithEntity.getLastCreatedEntityKey()
      newEditorState = AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')

    })

    onChange(newEditorState)
    this.hide()

  }

  show () {
    this.setState({
      visible: true
    })
  }

  hide () {
    this.setState({
      visible: false
    }, () => {
      this.uploader.unselectAllItem()
    })
  }

}