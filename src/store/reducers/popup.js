import { CLOSE_POPUP, OPEN_POPUP } from "../constants"

const popup = (state = false, action) => {
  switch (action.type) {
    case CLOSE_POPUP:
      return false
    case OPEN_POPUP:
      return true
    default:
      return state
  }
}

export default popup
