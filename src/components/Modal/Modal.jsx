import React, { PureComponent } from 'react'

class Modal extends PureComponent {
  /*
    this.props.data = {
      title: 'title',
      message: 'message',
      buttons: [
        {
          text: 'btn1',
          onPress: () => {}
        },
        {
          text: 'btn2',
          onPress: () => {}
        }
      ]
    }
  */
  componentDidUpdate (prevProps, prevState) {
    if (this.props.modal) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }

  getButtons () {
    return (this.props.data.buttons && this.props.data.buttons.length)
      ? (
        this.props.data.buttons.map((obj, i) => {
          return <div className='modal-button custom' key={i}
                      onClick={() => {
                        this.props.hideModal()
                        obj.onPress && obj.onPress()
                      }}>
            {obj.text}
          </div>
        })
      )
      : (
        <div className='modal-button default' onClick={() => { this.props.hideModal() }}>OK</div>
      )
  }

  render () {
    if (this.props.modal) {
      return (
        <div className='app-modal-overlay'>
          <div className='hide-modal' onClick={() => { this.props.hideModal() }}/>
          <div className='app-modal'>
            {(this.props.data.title !== null) && <p className='title'>{this.props.data.title || ''}</p>}
            <p className='message'>{this.props.data.message || 'Message'}</p>
            <div className='buttons'>
              {this.getButtons()}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div/>
      )
    }
  }
}

export default Modal
