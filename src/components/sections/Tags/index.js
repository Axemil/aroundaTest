import React, { useEffect } from "react"
import { connect } from "react-redux"
import s from "./style.scss"
import TagLink from "@sections/TagLink"
import { Link } from "react-router-dom"
import fetchTags from "../../../store/actions/fetchTags"
import { reactSelectOptionsFromTags } from "../../../store/selectors"
import { useHistory } from "react-router-dom"
import TagMenuVertical from "@sections/TagMenuVertical"
import TagMenuHorizontal from "@sections/TagMenuHorizontal"

let Tags = ({ tagNames, fetchTags }) => {
  const history = useHistory()

  useEffect(() => {
    fetchTags()
  }, [])

  const options = reactSelectOptionsFromTags(tagNames)

  return (
    <>
      <TagMenuVertical options={options} onChange={(path) => history.push(path)} />
      <TagMenuHorizontal options={options} />
    </>
  )
}

const mapStateToProps = ({ tagNames }) => ({ tagNames })
Tags = connect(mapStateToProps, { fetchTags })(Tags)

export default Tags
