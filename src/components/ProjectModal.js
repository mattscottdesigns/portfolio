import React from "react"
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
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: "30px",
            centerMode: true,
            arrows: false,
            swipeToSlide: true,
          },
        },
      ],
    }

    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30 bg-black bg-opacity-75">
        <div
          className="project-previous"
          onClick={() => {
            this.slider.slickPrev()
          }}
        >
          <FaChevronCircleLeft />
        </div>
        <div
          className="project-next"
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
                className="h-screen py-4 duration-300 ease-in-out md:px-16 md:py-10 transition-height"
                key={index}
              >
                <div className="relative flex flex-col h-full max-h-full overflow-auto duration-300 ease-in-out bg-white rounded-lg transition-height">
                  <div className="px-5 py-4 border-b bg-light">
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
                          <div key={index} className="pt-5 md:pt-10">
                            <img
                              className="border rounded-lg"
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
