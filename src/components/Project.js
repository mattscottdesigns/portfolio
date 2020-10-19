import React from "react"

const Project = props => {
  const { thumbnail, display } = props

  return (
    <img
      className="mx-auto transition duration-300 ease-in-out transform rounded shadow-xl cursor-pointer hover:scale-110"
      src={thumbnail}
      alt={display}
    />
  )
}

export default Project
