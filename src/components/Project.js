import React from "react"

class Projects extends React.Component {
  render() {
    return (
      <img
        className="mx-auto transition duration-300 ease-in-out transform rounded shadow-xl cursor-pointer hover:scale-110"
        src={this.props.thumbnail}
      />
    )
  }
}

export default Projects
