import React, { useState, useEffect } from "react"
import picture from "./../images/picture.png"

const About = () => {
  const [height, setHeight] = useState("100vh")

  useEffect(() => {
    if (typeof window !== undefined) {
      setHeight(window.innerHeight)
    }
  }, [])

  return (
    <div
      id="about"
      className="flex items-center px-10 py-10 text-center text-white transition-all duration-300 ease-in-out bg-center bg-cover md:text-left bg-about bg-dark"
      style={{ height: height }}
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
          <div className="opacity-90 md:pl-6">
            <div className="text-4xl font-bold tracking-wide">
              Matthew Scott
            </div>
            <div className="mb-4 -mt-1 text-2xl font-thin text-primary">
              UI/UX Designer
            </div>
            <div className="mb-4 text-xl font-thin leading-8">
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
