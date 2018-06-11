import { UniqueIndex } from 'utils/base'

export default Component => class extends Component {

  constructor (props) {
    super.constructor(props)
    this.mediaItems = []
  }

  getMediaItem (id) {
    return this.mediaItems.find(item => item.id === id)
  }

  getSelectedMediaItems () {
    return this.mediaItems.filter(item => item.selected)
  }

  setMediaItems (items) {
    this.mediaItems = items.map(item => ({ ...item, id: item.id.toString() })) || []
    this.applyMediaChange()
    this.uploadItems()
  }

  addMediaItem (item) {
    this.addMediaItems([item])
  }

  addMediaItems (items) {
    this.mediaItems = [ ...this.mediaItems, ...items.map(item => ({ ...item, id: item.id.toString()})) ]
    this.applyMediaChange()
    this.uploadItems()
  }

  selectMediaItem (id) {
    const item = this.getMediaItem(id)
    if (item && (item.uploading || item.error)) {
      return false
    }
    this.setMediaItemState(id, {
      selected: true
    })
  }

  selectAllMediaItems () {
    this.mediaItems = this.mediaItems.filter(item => !item.error && !item.uploading).map(item => ({ ...item, selected: true}))
    this.applyMediaChange()
  }

  deselectMediaItem (id) {
    this.setMediaItemState(id, {
      selected: false
    })
  }

  deselectAllMediaItems () {
    this.mediaItems = this.mediaItems.map(item => ({ ...item, selected: false}))
    this.applyMediaChange()
  }

  removeMediaItem (id) {
    this.mediaItems = this.mediaItems.filter(item => item.id !== id)
    this.applyMediaChange()
  }

  removeSelectedMediaItems () {
    this.mediaItems = this.mediaItems.filter(item => !item.selected)
    this.applyMediaChange()
  }

  removeErrorItems () {
    this.mediaItems = this.mediaItems.filter(item => !item.error)
    this.applyMediaChange()
  }

  removeAllItems () {
    this.mediaItems = []
    this.applyMediaChange()
  }

  setMediaItemState (id, state) {
    this.mediaItems = this.mediaItems.map(item => item.id === id ? { ...item, ...state } : item)
    this.applyMediaChange()
  }

  reuploadErrorItems () {
    this.uploadItems(true)
  }

  uploadItems (ignoreError = false) {

    this.mediaItems.forEach((item, index) => {

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
        this.setMediaItemState(item.id, {error: 1})
        return false
      }

      this.setMediaItemState(item.id, {
        uploading: true,
        uploadProgress: 0,
        error: 0
      })

      this.uploadFn({
        file: item.file,
        libraryId: item.id,
        success: (res) => {
          const serverId = res.id || item.id
          this.handleUploadSuccess(item.id, res.url, serverId, res.meta)
        },
        progress: (progress) => {
          this.setMediaItemState(item.id, {
            uploading: true,
            uploadProgress: progress
          })
        },
        error: (error) => {
          this.setMediaItemState(item.id, {
            uploading: false,
            error: 2
          })
        }
      })

    })

  }

  createThumbnail (id, url) {

    this.compressImage(url, 226, 226, (result) => {
      this.setMediaItemState(id, {
        thumbnail: result.url
      })
    })

  }

  createInlineImage (id, url) {

    this.compressImage(url, 1280, 800, (result) => {
      this.handleUploadSuccess(id, result.url, id)
    })

  }

  handleUploadSuccess (id, url, newId, meta = {}) {

    this.setMediaItemState(id, {
      id: newId || id,
      file: null,
      url: url,
      uploadProgress: 1,
      uploading: false,
      selected: false,
      meta: meta
    })

    const item = this.getMediaItem(newId || id)
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

  applyMediaChange () {
    this.onMediaItemsChange(this.mediaItems)
  }

  uploadImage (file, callback) {

    const fileId = new Date().getTime() + '_' + UniqueIndex()

    this.addMediaItem({
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

  uploadImageRecursively (files, callback, index = 0) {

    if (files[index] && files[index].type.indexOf('image') > -1) {
      this.uploadImage(files[index], (image) => {
        callback && callback(image)
        index < files.length -1 && this.uploadImageRecursively(files, callback, index + 1)
      })
    } else {
      index < files.length -1 && this.uploadImageRecursively(files, callback, index + 1)
    }

  }

  resolvePastedData ({ clipboardData }, callback) {

    if (clipboardData && clipboardData.items && clipboardData.items[0].type.indexOf('image') > -1) {
      this.uploadImage(clipboardData.items[0].getAsFile(), callback)
    }

  }

  onMediaItemsChange (items) {}

}