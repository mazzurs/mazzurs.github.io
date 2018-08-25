import React, { PureComponent } from 'react'

import SliderContainer from '../Slider/SliderContainer'
import ContactFormContainer from '../ContactForm/ContactFormContainer'
import StartLearning from '../Buttons/Begin/Begin'

class About extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize)
  }

  onResize () {
    console.log(window.innerWidth)
  }

  render () {
    return (
      <div className='about'>
        <div className='top'>
          <div className="left">
            <h1>Создавай реально <br/>крутые вещи</h1>
            <h3>Онлайн школа обучения Front-end разработке. <br/>Авторский курс</h3>
            <StartLearning/>
          </div>
          <div className='circle'/>
          <div className='circles'/>
          <div className='img-container'>
            <div className='img-wrapper'/>
          </div>

        </div>
        <div className='what-is-webwork'>
          <div className="left">
            <h1>
              Что такое webwork?
            </h1>
            <h3>
              <span className='project-name'>Webwork</span> - это сообщество прогрессивных людей, желающих развиваться в
              сфере IT технологий.
              Мы изучаем Front-end разработку, используя самые трендовые технологии, такие как React.js.
            </h3>
          </div>
          <div className="right">
            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/wwKSXhAhd6s"
                    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>

        <div className='slider-container'>
          <div className='head'>
            <h2>У нас обучилось уже <span className='students'>2492</span> человек</h2>
            <h3>Средняя зарплата 45 000 через 2 месяца после обучения</h3>
          </div>
          <SliderContainer/>

        </div>

        <ContactFormContainer />
      </div>
    )
  }
}

export default About