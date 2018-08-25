import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { hideModal } from '../../actions/index'
import ContactForm from './ContactForm'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({hideModal}, dispatch)
}

const ContactFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm)

export default ContactFormContainer
