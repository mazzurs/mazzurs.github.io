import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/fontawesome-free-solid'

class StartLearning extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <NavLink className='nav-link' to='/main/course'>
        <div className='begin'>
          <span>Начать обучение</span>
          <FontAwesomeIcon className='icon' icon={faRocket}/>
        </div>
      </NavLink>
    )
  }
}

export default StartLearning