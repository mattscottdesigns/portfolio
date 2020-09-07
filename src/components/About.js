import React from "react"
import picture from "./../images/picture.png"

class About extends React.Component {
  render() {
    return (
      <div
        id="about"
        className="flex items-center min-h-screen p-10 text-center text-white bg-cover bg-about bg-dark"
      >
        <div className="mx-auto">
          <img className="mx-auto mb-6 img-picture" src={picture} />
          <div className="opacity-75">
            <div className="text-2xl font-bold tracking-wide">
              Matthew Scott
            </div>
            <div className="mb-6 font-thin">UI/UX Developer</div>
            <div className="max-w-sm text-2xl font-thin">
              My name is{" "}
              <span className="font-bold text-primary">Matt Scott</span> and I
              create minimal and user friendly designs.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
