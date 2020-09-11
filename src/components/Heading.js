import React from "react"

const Heading = props => {
  return (
    <div className="p-4 text-2xl font-bold text-center text-black bg-light">
      {props.text}
    </div>
  )
}

export default Heading
