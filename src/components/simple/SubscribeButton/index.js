import React from "react"
import s from "./style.scss"
import classnames from "classnames"
import { connect } from "react-redux"
import openPopup from "../../../store/actions/openPopup"

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openPopup: () => {
      console.log("Dispatching")
      dispatch(openPopup())
    }
  }
}

const SubscribeButton = ({ text, style, className, openPopup }) => {
  return (
    <button
      onClick={openPopup}
      className={classnames(className, s.subscribeButton)}
      style={style ? style : {}}
    >
      {text}
    </button>
  )
}

export default connect(null, mapDispatchToProps)(SubscribeButton)
