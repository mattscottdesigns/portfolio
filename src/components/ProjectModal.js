import React from "react"
import Rodal from "rodal"
import "rodal/lib/rodal.css"

class ProjectModal extends React.Component {
  render() {
    return (
      <Rodal {...this.props}>
        <div className="p-5">
          <div className="text-2xl">{this.props.project.display}</div>
          <div className="mb-5 text-sm text-primary">
            {this.props.project.company}
          </div>
          <div className="mb-5 font-light text-md text-dark">
            {this.props.project.description}
          </div>

          <div>
            {this.props.project.tags.map(tag => {
              return (
                <span
                  key={tag}
                  className="inline-block px-4 py-1 m-1 text-sm rounded bg-light"
                >
                  {tag}
                </span>
              )
            })}
          </div>
          <div className="flex flex-wrap justify-center">
            {this.props.project.images.map(image => {
              return (
                <div className="py-10">
                  <img className="border rounded-lg shadow-xl" src={image} />
                </div>
              )
            })}
          </div>
        </div>
      </Rodal>
    )
  }
}

export default ProjectModal
