import React, { PureComponent } from 'react'
import SliderContainer from 'react-slick'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/fontawesome-free-solid'

import { limitTextLength } from '../../utils/index'
import {
  avatar1
} from './avarars'

function SamplePrevArrow (props) {
  const {className, style, onClick} = props
  return (
    <div className='prev-arrow' onClick={onClick}>
      <FontAwesomeIcon className='icon' icon={faAngleLeft}/>
    </div>
  )
}

function SampleNextArrow (props) {
  const {className, style, onClick} = props
  return (
    <div className='next-arrow' onClick={onClick}>
      <FontAwesomeIcon className='icon' icon={faAngleRight}/>
    </div>
  )
}

const settings = {
  // dots: true,
  // infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // vertical: true,
  // verticalSwiping: true,
  width: 730,
  height: 350,

  nextArrow: <SampleNextArrow className='next-arrow'/>,
  prevArrow: <SamplePrevArrow className='prev-arrow'/>
}

class Slider extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
    this.showStory = this.showStory.bind(this)
  }

  slides (slides) {
    return (
      slides.map(slide => {
        return (
          <div className='slide'>
            <div className='wrapper'>
              <div className='left'>
                <div className='avatar'>
                  <img src={slide.avatar} alt=""/>
                </div>
                <div className='name'>
                  {slide.name}
                </div>
                <div className='socials'>
                  {
                    Object.keys(slide.socials).map(key => {
                      return (
                        <a href={slide.socials[key]} target='_blank'>
                          <div className={key}/>
                        </a>
                      )
                    })
                  }
                </div>
              </div>
              <div className='right'>
                <div className='title'>
                  {slide.title}
                </div>
                <p className='text'>
                  {limitTextLength(slide.text, 220)}
                  {slide.text.length > 220 &&
                  <div className='read-story' onClick={() => {this.showStory(slide.text)}}>Читать историю</div>}
                </p>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  showStory (sory) {
    this.props.showModal({
      title: null,
      message: sory,
      buttons: [
        {
          text: 'Закрыть'
        }
      ]
    })
  }

  render () {
    return (
      <SliderContainer {...settings} className='slider'>
        {this.slides([{
          name: 'Дарья Пушкарская',
          avatar: avatar1,
          socials: {
            insta: 'https://www.instagram.com/mazur_serg/',
            youtube: 'https://www.youtube.com/',
            twitter: 'https://www.youtube.com/',
            facebook: 'https://www.youtube.com/',
            github: 'https://www.instagram.com/mazur_serg/',
            vk: 'https://www.instagram.com/mazur_serg/'
          },
          title: 'На работу мечты сразу после курса!',
          text: 'Немного фактов: Я закончила интенсивный курс LoftSchool еще в 2016 году, но это был единственный курс, который я проходила по frontend. Этого курса было достаточно, чтобы успешно устроиться на работу и начать карьеру. После курса я устроилась стажером в 2ГИС. Сейчас работаю в Тинькофф.ру. Знания, которые я получила за курс были актуальными для рынка, чтобы начать работать в ИТ-компании с топовым и современным стеком технологий.\n' +
          '\n' +
          'Лирика: Я до сих пор благодарна LoftSchool за опыт, знания и навыки, которые я получила. В этой школе чудесная атмосфера и добрые ребята, которые всегда стремятся помочь. Поэтому даже после того, как я закончила курс, я не захотела расставаться с коллективом и уже вернулась в школу на должность наставника. Хоть я уже и не работаю в одной команде с ребятами, но я до сих пор считаю, что работа, которую делают ребята, очень полезна и действительно меняет жизни людей.\n' +
          '\n' +
          'Ведь любой человек, так же как я, может изменить свою жизнь, закончив курс и получив необходимые навыки. Я была студенткой из Новосибирска. У меня не было на тот момент никогда работы за которую мне могли бы заплатить больше 20 тысяч рублей, а именно столько стоил на то время курс. У меня были накопленные сбережения и мне было боязно покупать онлайн курс. У меня были сомнения, но у меня было и жгучее желание изменить свою жизнь. Я купила курс и не пожалела. Это была сложная работа, в первую очередь над собой. Материал, который нам давали не был для меня легким, но наставники всегда помогали и поддерживали. В результате я устроилась на работу мечты сразу после курса, которую до сих пор вспоминаю с теплом.\n' +
          '\n' +
          'Если у меня сейчас спрашивают про курсы, которые можно пройти, то я обязательно рекомендую LoftSchool. Все, кто обучались в школе по моей рекомендации, всегда делились после курса со мной положительными отзывами.\n' +
          '\n' +
          'Желаю всем добиваться поставленных целей и никогда не сдаваться!'
        },
          {
            name: 'Дарья Пушкарская',
            avatar: avatar1,
            socials: {
              insta: 'https://www.instagram.com/mazur_serg/',
              github: 'https://www.instagram.com/mazur_serg/',
              vk: 'https://www.instagram.com/mazur_serg/'
            },
            title: 'На работу мечты сразу после курса!',
            text: 'Немного фактов: Я закончила интенсивный курс LoftSchool еще в 2016 году, но это был единственный курс, который я проходила по frontend. Этого курса было достаточно, чтобы успешно устроиться на работу и начать карьеру. После курса я устроилась стажером в 2ГИС. Сейчас работаю в Тинькофф.ру. Знания, которые я получила за курс были актуальными для рынка, чтобы начать работать в ИТ-компании с топовым и современным стеком технологий.\n' +
            '\n' +
            'Лирика: Я до сих пор благодарна LoftSchool за опыт, знания и навыки, которые я получила. В этой школе чудесная атмосфера и добрые ребята, которые всегда стремятся помочь. Поэтому даже после того, как я закончила курс, я не захотела расставаться с коллективом и уже вернулась в школу на должность наставника. Хоть я уже и не работаю в одной команде с ребятами, но я до сих пор считаю, что работа, которую делают ребята, очень полезна и действительно меняет жизни людей.\n' +
            '\n' +
            'Ведь любой человек, так же как я, может изменить свою жизнь, закончив курс и получив необходимые навыки. Я была студенткой из Новосибирска. У меня не было на тот момент никогда работы за которую мне могли бы заплатить больше 20 тысяч рублей, а именно столько стоил на то время курс. У меня были накопленные сбережения и мне было боязно покупать онлайн курс. У меня были сомнения, но у меня было и жгучее желание изменить свою жизнь. Я купила курс и не пожалела. Это была сложная работа, в первую очередь над собой. Материал, который нам давали не был для меня легким, но наставники всегда помогали и поддерживали. В результате я устроилась на работу мечты сразу после курса, которую до сих пор вспоминаю с теплом.\n' +
            '\n' +
            'Если у меня сейчас спрашивают про курсы, которые можно пройти, то я обязательно рекомендую LoftSchool. Все, кто обучались в школе по моей рекомендации, всегда делились после курса со мной положительными отзывами.\n' +
            '\n' +
            'Желаю всем добиваться поставленных целей и никогда не сдаваться!'
          }])}
      </SliderContainer>
    )
  }
}

export default Slider