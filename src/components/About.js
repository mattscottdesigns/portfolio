import React from "react"
import picture from "./../images/picture.png"

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center p-10 text-center text-white transition-all duration-300 ease-in-out bg-fixed bg-center bg-cover md:text-left bg-about bg-dark"
      style={{ height: window.innerHeight }}
    >
      <div className="flex flex-wrap items-center max-w-md mx-auto md:max-w-4xl">
        <div className="w-full md:w-1/3">
          <img
            className="mx-auto mb-6 border-4 border-white border-opacity-25 rounded-full shadow-xl md:mb-0 img-picture"
            src={picture}
            alt="Matthew Scott"
          />
        </div>
        <div className="w-full md:w-2/3">
          <div className="opacity-75 md:pl-12">
            <div className="text-4xl font-bold tracking-wide">
              Matthew Scott
            </div>
            <div className="mb-4 -mt-2 text-2xl font-thin text-primary">
              UI/UX Designer
            </div>
            <div className="mb-4 text-xl font-thin md:text-2xl">
              My name is Matt and I am designer & developer from Dartmouth
              Massachusetts who is passionate about creating minimal and user
              friendly designs.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
