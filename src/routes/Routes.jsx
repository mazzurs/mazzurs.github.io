import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router'

import AboutContainer from '../components/About/AboutContainer'
import CourseContainer from '../components/Course/CourseContainer'
import ReviewsContainer from '../components/Reviews/ReviewsContainer'
import ContactsContainer from '../components/Сontacts/ContactsContainer'

class Routes extends PureComponent {
  render () {
    return (
      <div className='app-routes'>
        <Switch>
          <Route path='/main/about' component={AboutContainer} />
          <Route path='/main/course' component={CourseContainer} />
          <Route path='/main/reviews' component={ReviewsContainer} />
          <Route path='/main/contact' component={ContactsContainer} />
          {/*<Redirect to='/main/about' />*/}
        </Switch>
      </div>
    )
  }
}

Routes.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

Routes.defaultProps = {}

export default Routes
