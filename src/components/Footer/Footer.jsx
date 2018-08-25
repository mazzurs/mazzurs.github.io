import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import StartLearning from '../Buttons/Begin/Begin'
import logo from '../../assets/images/logo.png'

const buttons = [
  {
    text: 'О проекте',
    cls: 'about',
    link: 'about'
  },
  {
    text: 'Курс',
    cls: 'Course',
    link: 'course'
  },
  {
    text: 'Отзывы',
    cls: 'Reviews',
    link: 'reviews'
  },
  {
    text: 'Контакты',
    cls: 'contact',
    link: 'contact'
  }
]

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <footer className='footer'>
        <div className='wrapper'>

          <div className='footer-items'>
            <div className='title'>
              © WEBWORK 2018
              <p className='sub-title'>Школа онлайн-образования</p>
            </div>
            <div className='info'>
              <ul className='info-list'>
                <li>+7 (812) 408-06-89</li>
                <li>info@loftschool.com</li>
              </ul>
            </div>
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

          <div className='footer-items navigation'>
            <div className='footer-item main'>
              <div className='footer-subtitle'>Навигация</div>
              <div className='footer-main'>
                <ul>
                  <li>О проекте</li>
                  <li>Курс</li>
                  <li>Отзывы</li>
                  <li>Контакты</li>
                </ul>
              </div>
            </div>

          </div>
          <div className='footer-items'>

          </div>
        </div>
      </footer>
    )
  }
}

export default Footer