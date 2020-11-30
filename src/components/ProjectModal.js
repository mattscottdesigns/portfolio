import React, { useRef } from "react"
import Slider from "react-slick"
import Tag from "./Tag"
import "slick-carousel/slick/slick.css"
import { GrClose } from "react-icons/gr"
import SlidingPane from "react-sliding-pane"
import "react-sliding-pane/dist/react-sliding-pane.css"
import projects from "./../constants/projects"

const ProjectModal = props => {
  const { visible, onClose, selectedProjectIndex } = props
  const sliderRef = useRef()

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: selectedProjectIndex,
  }

  return (
    <SlidingPane
      className="max-w-4xl text-white duration-300 bg-white"
      overlayClassName="z-30 duration-300"
      from={"right"}
      hideHeader={true}
      isOpen={visible ? true : false}
      onRequestClose={onClose}
    >
      <Slider {...settings} ref={sliderRef}>
        {projects.map((project, index) => {
          return (
            <div className="h-screen" key={index}>
              <div className="relative flex flex-col h-full max-h-full overflow-auto duration-300 ease-in-out bg-white rounded-lg transition-height">
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
                  <div className="mb-5">
                    {project.tags.map((tag, index) => {
                      return <Tag key={index} text={tag} />
                    })}
                  </div>
                  <div className="flex flex-wrap justify-center max-w-4xl px-4 mx-auto">
                    {project.images.map((image, index) => {
                      return (
                        <div key={index} className="pb-10">
                          <img
                            className="border rounded-lg shadow-lg"
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
    </SlidingPane>
  )
}

export default ProjectModal
