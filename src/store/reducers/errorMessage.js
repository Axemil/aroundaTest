import { SHOW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE } from "../constants"

const errorMessage = (state = false, action) => {
  switch (action.type) {
    case HIDE_ERROR_MESSAGE:
      return false
    case SHOW_ERROR_MESSAGE:
      return true
    default:
      return state
  }
}

export default errorMessage
