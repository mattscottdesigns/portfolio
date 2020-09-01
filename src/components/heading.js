import React from "react"

class Heading extends React.Component {
  render() {
    const { props } = this

    return (
      <div className="bg-light p-4 text-2xl font-bold text-center text-dark">
        {props.text}
      </div>
    )
  }
}

export default Heading
