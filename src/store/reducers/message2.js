import { SHOW_MESSAGE_2, HIDE_MESSAGE_2 } from "../constants"

const message2 = (state = false, action) => {
  switch (action.type) {
    case HIDE_MESSAGE_2:
      return false
    case SHOW_MESSAGE_2:
      return true
    default:
      return state
  }
}

export default message2
