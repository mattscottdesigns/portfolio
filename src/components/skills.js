import React from "react"
import Heading from "./Heading"
import PercentageBar from "./PercentageBar"

class Skills extends React.Component {
  render() {
    return (
      <div id="skills">
        <Heading text="Skills" id="skills" />
        <div className="max-w-6xl px-10 py-16 mx-auto">
          <div className="mb-10 font-light text-md text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est
          </div>

          <div className="mb-10">
            <div className="mb-5 text-2xl font-light">Development</div>

            <PercentageBar
              label="JavaScript / ES6"
              percent="90"
              backgroundClass="bg-primary"
            />
            <PercentageBar
              label="React"
              percent="85"
              backgroundClass="bg-primary"
            />
            <PercentageBar
              label="Classic ASP"
              percent="80"
              backgroundClass="bg-primary"
            />
            <PercentageBar
              label="React Native"
              percent="70"
              backgroundClass="bg-primary"
            />
            <PercentageBar
              label="PHP"
              percent="70"
              backgroundClass="bg-primary"
            />
            <PercentageBar
              label="SQL"
              percent="70"
              backgroundClass="bg-primary"
            />
            <PercentageBar
              label="React"
              percent="50"
              backgroundClass="bg-primary"
            />
          </div>

          <div>
            <div className="mb-5 text-2xl font-light">Design</div>
            <PercentageBar
              label="HTML / CSS"
              percent="95"
              backgroundClass="bg-secondary"
            />
            <PercentageBar
              label="Photoshop"
              percent="90"
              backgroundClass="bg-secondary"
            />
            <PercentageBar
              label="XD"
              percent="85"
              backgroundClass="bg-secondary"
            />
            <PercentageBar
              label="Illustrator"
              percent="80"
              backgroundClass="bg-secondary"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
