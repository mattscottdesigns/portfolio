import React from "react"
import Rodal from "rodal"
import "rodal/lib/rodal.css"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

class ProjectModal extends React.Component {
  render() {
    return (
      <Rodal duration={500} {...this.props}>
        <div className="px-8 py-4">
          <div className="project-previous" onClick={this.props.onPrevious}>
            <BiChevronLeft />
          </div>
          <div className="project-next" onClick={this.props.onNext}>
            <BiChevronRight />
          </div>
          <div className="pr-10 leading-8">
            <div className="text-2xl">{this.props.project.display}</div>
            <div className="mb-3 text-primary">
              {this.props.project.company}
            </div>
          </div>

          <div className="mb-3 font-light text-md text-dark">
            {this.props.project.description}
          </div>
          <div>
            {this.props.project.tags.map(tag => {
              return (
                <span
                  key={tag}
                  className="inline-block px-4 py-1 m-2 ml-0 text-sm rounded bg-light"
                >
                  {tag}
                </span>
              )
            })}
          </div>
          <div className="flex flex-wrap justify-center">
            {this.props.project.images.map((image, index) => {
              return (
                <div key={index} className="py-10">
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
