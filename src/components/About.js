import React from "react"
import picture from "./../images/picture.png"

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center min-h-screen p-10 text-center text-white transition-all duration-300 ease-in-out bg-center bg-cover bg-about bg-dark"
    >
      <div className="mx-auto">
        <img
          className="mx-auto mb-6 rounded-full shadow-xl img-picture"
          src={picture}
        />
        <div className="opacity-75">
          <div className="text-4xl font-bold tracking-wide">Matthew Scott</div>
          <div className="mb-6 -mt-1 text-2xl font-thin">UI/UX Developer</div>
          <div className="max-w-xs text-xl font-thin">
            My name is{" "}
            <span className="font-medium text-primary">Matt Scott</span> and I
            create minimal and user friendly designs.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
