import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Contacts from './Contacts'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

const ContactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts)

export default ContactsContainer
