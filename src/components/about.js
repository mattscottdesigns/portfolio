import React from "react"
import picture from "./../images/picture.png"

class About extends React.Component {
  render() {
    return (
      <div className="bg-about bg-cover min-h-screen p-10 flex items-center text-white text-center">
        <div className="mx-auto">
          <img className="img-picture mx-auto mb-6" src={picture} />
          <div className="opacity-75">
            <div className="text-2xl font-bold tracking-wide">
              Matthew Scott
            </div>
            <div className="font-thin mb-6">UI/UX Developer</div>
            <div className="font-thin text-2xl max-w-sm">
              My name is{" "}
              <span className="text-primary font-bold">Matt Scott</span> and I
              create minimal and user friendly designs.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
