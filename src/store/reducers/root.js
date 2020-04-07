import { combineReducers } from "redux"
import tags from "./tags"
import tagNames from "./tagNames"
import posts from "./posts"
import post from "./post"
import popup from "./popup"
import message from "./message"
import message2 from "./message2"
import errorMessage from "./errorMessage"

export default combineReducers({
  tags,
  tagNames,
  posts,
  post,
  popup,
  message,
  message2,
  errorMessage
})
