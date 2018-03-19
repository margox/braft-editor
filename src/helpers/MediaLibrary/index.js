import { UniqueIndex } from 'utils/base'

export default class MediaLibrary {

  constructor () {
    this.items = []
  }

  getItem (id) {
    return this.items.find(item => item.id === id)
  }

  getSelectedItems () {
    return this.items.filter(item => item.selected)
  }

  setItems (items) {
    this.items = items.map(item => ({ ...item, id: item.id.toString() })) || []
    this.applyChange()
    this.uploadItems()
  }

  addItem (item) {
    this.addItems([item])
  }

  addItems (items) {
    this.items = [ ...this.items, ...items.map(item => ({ ...item, id: item.id.toString()})) ]
    this.applyChange()
    this.uploadItems()
  }

  selectItem (id) {
    const item = this.getItem(id)
    if (item && (item.uploading || item.error)) {
      return false
    }
    this.setItemState(id, {
      selected: true
    })
  }

  selectAllItems () {
    this.items = this.items.filter(item => !item.error && !item.uploading).map(item => ({ ...item, selected: true}))
    this.applyChange()
  }

  deselectItem (id) {
    this.setItemState(id, {
      selected: false
    })
  }

  deselectAllItems () {
    this.items = this.items.map(item => ({ ...item, selected: false}))
    this.applyChange()
  }

  removeItem (id) {
    this.items = this.items.filter(item => item.id !== id)
    this.applyChange()
  }

  removeSelectedItems () {
    this.items = this.items.filter(item => !item.selected)
    this.applyChange()
  }

  removeErrorItems () {
    this.items = this.items.filter(item => !item.error)
    this.applyChange()
  }

  removeAllItems () {
    this.items = []
    this.applyChange()
  }

  setItemState (id, state) {
    this.items = this.items.map(item => item.id === id ? { ...item, ...state } : item)
    this.applyChange()
  }

  reuploadErrorItems () {
    this.uploadItems(true)
  }

  uploadItems (ignoreError = false) {

    this.items.forEach((item, index) => {

      if (item.uploading || item.url) {
        return false
      }

      if (!ignoreError && item.error) {
        return false
      }

      if (item.type === 'IMAGE') {
        let fileURL = URL.createObjectURL(item.file)
        this.createThumbnail(item.id, fileURL)
        if (!this.uploadFn) {
          this.createInlineImage(item.id, fileURL)
          return false
        }
      } else if (!this.uploadFn) {
        this.setItemState(item.id, {error: 1})
        return false
      }

      this.setItemState(item.id, {
        uploading: true,
        uploadProgress: 0,
        error: 0
      })

      this.uploadFn({
        file: item.file,
        libraryId: item.id,
        success: (res) => {
          const serverId = res.id || item.id
          this.handleUploadSuccess(item.id, res.url, serverId)
        },
        progress: (progress) => {
          this.setItemState(item.id, {
            uploading: true,
            uploadProgress: progress
          })
        },
        error: (error) => {
          this.setItemState(item.id, {
            uploading: false,
            error: 2
          })
        }
      })

    })

  }

  createThumbnail (id, url) {

    this.compressImage(url, 226, 226, (result) => {
      this.setItemState(id, {
        thumbnail: result.url
      })
    })

  }

  createInlineImage (id, url) {

    this.compressImage(url, 1280, 800, (result) => {
      this.handleUploadSuccess(id, result.url, id)
    })

  }

  handleUploadSuccess (id, url, newId) {

    this.setItemState(id, {
      id: newId || id,
      file: null,
      url: url,
      uploadProgress: 1,
      uploading: false,
      selected: false
    })

    const item = this.getItem(newId || id)
    item.onReadyToInsert && item.onReadyToInsert(item)

  }

  compressImage (url, width, height, callback) {

    let image = new Image()
    let compressCanvas = document.createElement('canvas')
    
    image.src = url
    image.onload = function () {

      let scale = 1  

      if (this.width > width || this.height > height) {
        scale = this.width > this.height ? width / this.width : height / this.height
      } else {
        callback({
          url: url,
          width: this.width,
          height: this.height
        })
        return false
      }

      compressCanvas.width = this.width * scale
      compressCanvas.height = this.height * scale

      let ctx = compressCanvas.getContext('2d')
      ctx.drawImage(this, 0, 0, compressCanvas.width, compressCanvas.height)

      callback({
        url: compressCanvas.toDataURL('image/png', 1),
        width: compressCanvas.width,
        height: compressCanvas.height
      })

    }

  }

  applyChange (changeType) {
    this.onChange(this.items)
  }

  resolvePastedData ({ clipboardData }, callback) {

    if (clipboardData && clipboardData.items && clipboardData.items[0].type.indexOf('image') > -1) {

      const file = clipboardData.items[0].getAsFile()
      const fileId = new Date().getTime() + '_' + UniqueIndex()

      this.addItem({
        type: 'IMAGE',
        id: fileId,
        file: file,
        name: fileId,
        size: file.size,
        uploadProgress: 0,
        uploading: false,
        selected: false,
        error: 0,
        onReadyToInsert: callback
      })

    }

  }

  onChange (items) {}

}