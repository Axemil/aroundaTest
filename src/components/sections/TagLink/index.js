import React from "react"
import { Link } from "react-router-dom"

const TagLink = ({ to, children, className }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}

export default TagLink
