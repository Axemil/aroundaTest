import { ADD_POST } from "../constants"

const addPost = (post) => ({
  type: ADD_POST,
  payload: post
})

export default addPost
