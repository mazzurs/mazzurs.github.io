import React, { PureComponent } from 'react'

class ContactForm extends PureComponent {
  render () {
    return (
      <div className='contact-me'>
        <div className='left'>
          <div className='img-container'>
            <div className='img-wrapper'/>
            <h1 className='my-name'>Сергей Мазур</h1>
            <div className='socials'>
              <a href='https://www.facebook.com/smazzur' target='_blank'>
                <div className='facebook'/>
              </a>
              <a href='https://vk.com/sergmazur' target='_blank'>
                <div className='vk'/>
              </a>
              <a href='https://www.instagram.com/mazur_serg/' target='_blank'>
                <div className='insta'/>
              </a>
              <a href='https://t.me/mazur_s' target='_blank'>
                <div className='telegram'/>
              </a>
            </div>
          </div>
        </div>
        <form className='contact-form'>
          <h1 className='title item'>Остались вопросы?</h1>
          <div className='item'>
            <input
              className='name'
              type="text"
              placeholder='Ваше имя'
            />
            <input
              className='email'
              type="text"
              placeholder='Ваш e-mail'
            />
          </div>
          <textarea className='text item'/>
          <button className='submit-btn' type='submit'>Отправить</button>
        </form>
      </div>
    )
  }
}

export default ContactForm
