import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Course from './Course'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

const CourseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Course)

export default CourseContainer
