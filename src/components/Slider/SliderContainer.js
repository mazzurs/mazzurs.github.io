import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showModal } from '../../actions/index'
import Slider from './Slider'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({showModal}, dispatch)
}

const SliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider)

export default SliderContainer
