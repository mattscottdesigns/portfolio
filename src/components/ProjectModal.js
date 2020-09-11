import React from "react"
import { projects } from "./../constants/projects"
import Slider from "react-slick"
import { GrClose } from "react-icons/gr"

class ProjectModal extends React.Component {
  componentDidMount() {
    this.slider.slickGoTo(this.props.getProjectIndex(this.props.project))
  }

  render() {
    const settings = {
      centerMode: true,
      centerPadding: "100px",
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: "35px",
          },
        },
      ],
    }

    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30 bg-black bg-opacity-75">
        <Slider {...settings} ref={ref => (this.slider = ref)}>
          {projects.map(project => {
            return (
              <div className="h-screen py-5">
                <div className="relative h-full p-6 overflow-auto bg-white rounded-lg">
                  <div
                    className="absolute top-0 right-0 p-6 text-2xl"
                    onClick={this.props.onClose}
                  >
                    <GrClose />
                  </div>

                  <div className="pr-10">
                    <div className="mb-1 text-2xl font-bold leading-8">
                      {project.display}
                    </div>
                    <div className="mb-4 text-lg leading-6 text-primary">
                      {project.company}
                    </div>
                  </div>

                  <div className="mb-3 font-light text-md text-dark">
                    {project.description}
                  </div>
                  <div>
                    {project.tags.map(tag => {
                      return (
                        <span
                          key={tag}
                          className="inline-block px-4 py-1 mb-2 mr-2 text-sm rounded bg-light"
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                  <div className="flex flex-wrap justify-center">
                    {project.images.map((image, index) => {
                      return (
                        <div key={index} className="py-10">
                          <img
                            className="border rounded-lg shadow-xl"
                            src={image}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default ProjectModal
