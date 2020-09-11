import React from "react"

const Project = props => {
  return (
    <img
      className="mx-auto transition duration-300 ease-in-out transform rounded shadow-xl cursor-pointer hover:scale-110"
      src={props.thumbnail}
      alt={props.display}
    />
  )
}

export default Project
