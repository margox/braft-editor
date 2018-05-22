import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from 'braft-editor'

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      externalImageUrl: '',
    }
    this.editorInstance = null
  }

  inputExternalImageUrl = (e) => {
    this.setState({
      externalImageUrl: e.currentTarget.value.trim()
    })
  }

  insertExternalImage = () => {

    this.editorInstance.insertMedias([{
      type: 'IMAGE',
      url: this.state.externalImageUrl
    }])

    this.setState({
      externalImageUrl: ''
    })

  }

  render() {

    const extendControls = [
      {
        type: 'split',
      }, {
        type: 'modal',
        text: '插入图片',
        className: 'modal-button',
        modal: {
          id: 'external-image-modal',
          className: 'external-image-modal',
          title: '插入图片',
          showClose: true,
          showCancel: true,
          showConfirm: true,
          confirmable: this.state.externalImageUrl,
          confirmText: '插入',
          onConfirm: this.insertExternalImage,
          children: (
            <div className="external-image-modal-form">
              <input type="text" placeholder="输入图片地址" onChange={this.inputExternalImageUrl}/>
            </div>
          )
        }
      }
    ]

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            ref={instance => this.editorInstance = instance}
            excludeControls={['media']}
            extendControls={extendControls}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))

/*
// CSS样式参考
.external-image-modal .braft-modal-content{
  top: 30%;
}
.external-image-modal-form{
  width: 500px;
  height: 80px;
}
.external-image-modal-form input{
  box-sizing: border-box;
  width: 460px;
  height: 40px;
  margin: 20px 0 0 20px;
  padding: 0 10px;
  border: solid 1px #ccc;
}
*/