import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { hideModal } from '../../actions/index'
import Modal from './Modal'

const mapStateToProps = (state) => {
  return {
    modal: state.temp.modal,
    data: state.temp.modalData
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({hideModal}, dispatch)
}

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default ModalContainer
