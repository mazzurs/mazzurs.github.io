import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Routes from './Routes'

const mapStateToProps = (state) => {
  return {
  }
}

const RoutesContainer = withRouter(connect(
  mapStateToProps,
  null
)(Routes))

export default RoutesContainer
