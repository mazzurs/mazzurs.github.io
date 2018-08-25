import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MainApp from './MainApp'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

const MainAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp)

export default MainAppContainer
