import React, { Component } from 'react'

import HeaderContainer from '../Header/HeaderContainer'
import RoutesContainer from '../../routes/RoutesContainer'
import FooterContainer from '../Footer/FooterContainer'

class MainApp extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='main'>
        <HeaderContainer />
        <RoutesContainer />
        <FooterContainer />
      </div>
    )
  }
}

export default MainApp
