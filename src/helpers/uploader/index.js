import { imageToURL } from 'utils/base'

export default class Uploader {

  constructor () {
    this.items = []
  }

  setItems (items) {
    this.items = items || []
    this.triggerChange()
    this.uploadItems()
  }

  addItems (items) {
    this.items = [ ...this.items, ...items ]
    this.triggerChange()
    this.uploadItems()
  }

  selectItem (id) {
    this.setItemState(id, {
      selected: true
    })
  }

  unselectItem (id) {
    this.setItemState(id, {
      selected: false
    })
  }

  unselectAllItem () {
    this.items = this.items.map(item => {return { ...item, selected: false}})
    this.triggerChange()
  }

  removeItem (id) {
    this.items = this.items.filter(item => item.id !== id)
    this.triggerChange()
  }

  setItemState (id, state) {
    this.items = this.items.map(item => item.id === id ? { ...item, ...state } : item)
    this.triggerChange()
  }

  uploadItems () {

    let uploadFn
    this.items.forEach((item, index) => {

      if (item.uploading || item.url) {
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

      this.setItemState(item.id, {uploading: true})
      this.uploadFn({
        file: item.file,
        onSuccess: (res) => {
          this.setItemState(item.id, {
            file: null,
            url: res.url,
            name: res.name || item.name,
            uploadProgress: 1,
            uploading: false,
            selected: true
          })
        },
        onProgress: (progress) => {
          this.setItemState(item.id, {
            uploading: true,
            uploadProgress: progress
          })
        },
        onError: (error) => {
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
      this.setItemState(id, {
        url: result.url,
        uploading: false,
        uploadProgress: 1,
        selected: true
      })
    })
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

  triggerChange (changeType) {
    this.onChange(this.items)
  }

  onChange (items) {}

}