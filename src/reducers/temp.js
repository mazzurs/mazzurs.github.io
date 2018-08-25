import update from 'immutability-helper'
import { SHOW_MODAL, HIDE_MODAL } from '../constants/index'

const REDUCER = 'TEMP'

const defaultState = {
  modal: false,
  modalData: {
    title: 'Popup',
    message: 'test modal message'
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return update(state, {
        modal: {$set: true},
        modalData: {$set: action.data}
      })
    case HIDE_MODAL:
      return update(state, {
        modal: {$set: false},
        modalData: {$set: {}}
      })
    default:
      return state
  }
}
