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

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <header className="header">
        <img src={logo} className="logo" alt="logo"/>
        <div className="navigation">
          {buttons.map((button, index) => {
            return (
              <NavLink className='nav-link' to={`/main/${button.link}`} key={index}>
                <div className={`button ${button.cls} wow fadeInRight`}  data-wow-duration="3.5s">
                  {button.text}
                </div>
              </NavLink>
              )
          })}
        </div>
        <StartLearning />
      </header>
    )
  }
}

export default Header