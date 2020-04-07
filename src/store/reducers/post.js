import { ADD_POST } from "../constants"

const post = (state = {}, action) => {
  if (action.type === ADD_POST) {
    return { ...action.payload }
  }
  return state
}

export default post
