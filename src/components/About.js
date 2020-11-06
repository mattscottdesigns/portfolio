import React from "react"
import picture from "./../images/picture.png"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { FaEnvelopeSquare } from "react-icons/fa"

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center min-h-screen p-10 text-center text-white transition-all duration-300 ease-in-out bg-center bg-cover bg-about bg-dark"
    >
      <div className="mx-auto">
        <img
          className="mx-auto mb-6 border-4 border-white border-opacity-25 rounded-full img-picture"
          src={picture}
          alt="Matthew Scott"
        />
        <div className="opacity-75">
          <div className="text-4xl font-bold tracking-wide">Matthew Scott</div>
          <div className="mb-6 -mt-1 text-2xl font-thin">UI/UX Designer</div>
          <div className="max-w-md text-xl font-thin">
            My name is{" "}
            <span className="font-medium text-primary">Matt Scott</span> and I
            am passionate about create minimal and user friendly designs.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
