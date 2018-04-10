import React from 'react'

export default class CustomAtomic extends React.Component {
    focus(e) {
        console.log(e.target)
    }
    onMouseOver() {
        this.props.editor.setEditorProp('readOnly', true)
    }
    onMouseLeave() {
        this.props.editor.setEditorProp('readOnly', false)

    }
    render() {
        console.log(this.props);
        return (
            <div className="braft-custom-atomic"
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}>
              hello world
              <input type="text" ref={e => this.input = e} onClick={this.focus.bind(this)}/>
            </div>
        )
    }
}