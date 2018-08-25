import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../constants'

export function showModal (data) {
  return dispatch => {
    dispatch({
      type: SHOW_MODAL,
      data
    })
  }
}

export function hideModal () {
  return dispatch => {
    dispatch({
      type: HIDE_MODAL
    })
  }
}