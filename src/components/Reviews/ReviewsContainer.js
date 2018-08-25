import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Reviews from './Reviews'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

const ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)

export default ReviewsContainer
