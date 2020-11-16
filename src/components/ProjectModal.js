import React from "react"
import Tag from "./Tag"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrClose } from "react-icons/gr"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"

class ProjectModal extends React.Component {
  componentDidMount() {}

  render() {
    const { selectedProjectIndex, projects, onClose } = this.props

    const settings = {
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      initialSlide: selectedProjectIndex,
    }

    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30 bg-black bg-opacity-75">
        <div
          className="project-previous bg-dark"
          onClick={() => {
            this.slider.slickPrev()
          }}
        >
          <FaChevronCircleLeft />
        </div>
        <div
          className="project-next bg-dark"
          onClick={() => {
            this.slider.slickNext()
          }}
        >
          <FaChevronCircleRight />
        </div>
        <Slider {...settings} ref={ref => (this.slider = ref)}>
          {projects.map((project, index) => {
            return (
              <div
                className="h-screen duration-300 ease-in-out transition-height"
                key={index}
              >
                <div className="relative flex flex-col h-full max-h-full overflow-auto duration-300 ease-in-out bg-white transition-height">
                  <div className="px-5 py-4 border-b">
                    <div
                      className="absolute top-0 right-0 p-6 text-xl"
                      onClick={onClose}
                    >
                      <GrClose />
                    </div>

                    <div className="pr-10">
                      <div className="mb-1 text-xl font-medium text-dark">
                        {project.display}
                      </div>
                      <div className="text-lg leading-6 text-primary">
                        {project.company}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 overflow-auto">
                    <div className="mb-5 text-sm font-light md:text-base text-dark">
                      {project.description}
                    </div>
                    <div>
                      {project.tags.map((tag, index) => {
                        return <Tag key={index} text={tag} />
                      })}
                    </div>
                    <div className="flex flex-wrap justify-center">
                      {project.images.map((image, index) => {
                        return (
                          <div key={index} className="p-5 md:pt-10">
                            <img
                              className="w-full max-w-2xl border rounded-lg shadow-lg"
                              src={image}
                              alt={project.display + " #" + index}
                            />
                          </div>
                        )
                      })}
                    </div>
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
