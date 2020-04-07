import { SHOW_MESSAGE, HIDE_MESSAGE } from "../constants"

const message = (state = false, action) => {
  switch (action.type) {
    case HIDE_MESSAGE:
      return false
    case SHOW_MESSAGE:
      return true
    default:
      return state
  }
}

export default message
