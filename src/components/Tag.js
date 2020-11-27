import React from "react"

const Tag = props => {
  const { text } = props

  return (
    <span className="inline-block px-4 py-1 mb-2 mr-2 text-xs rounded md:text-sm text-dark bg-light">
      {text}
    </span>
  )
}

export default Tag
