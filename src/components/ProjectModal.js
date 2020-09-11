import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { GrClose } from "react-icons/gr"

class ProjectModal extends React.Component {
  componentDidMount() {}

  render() {
    const { activeProjectIndex } = this.props

    const settings = {
      centerMode: true,
      centerPadding: "100px",
      infinite: true,
      slidesToShow: 1,
      swipeToSlide: true,
      speed: 500,
      adaptiveHeight: true,
      lazyLoad: true,
      initialSlide: activeProjectIndex,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: "25px",
          },
        },
      ],
    }

    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30 bg-black bg-opacity-75">
        <Slider {...settings} ref={ref => (this.slider = ref)}>
          {this.props.projects.map((project, index) => {
            return (
              <div
                className="h-screen py-4 duration-300 ease-in-out md:px-2 transition-height"
                key={index}
              >
                <div className="relative flex flex-col h-full max-h-full overflow-auto duration-300 ease-in-out bg-white rounded-lg transition-height">
                  <div className="px-6 py-4 border-b">
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
                      <div className="text-lg leading-6 text-primary">
                        {project.company}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 overflow-auto">
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
                          <div key={index} className="py-5 md:py-10">
                            <img
                              className="border rounded-lg md:shadow-xl"
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
