import React from "react"
import Heading from "./Heading"
import PercentageBar from "./PercentageBar"
import skills from "./../constants/skills"

class Skills extends React.Component {
  render() {
    return (
      <div id="skills">
        <Heading text="Skills" />
        <div className="max-w-5xl px-10 py-16 mx-auto">
          <div className="font-light text-md text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est
          </div>

          <div className="mb-10">
            <div>
              {skills.map((skill, index) => {
                return (
                  <div key={index}>
                    <div className="mt-10 mb-5 text-2xl font-light">
                      {skill.title}
                    </div>
                    {skill.items.map((item, index) => {
                      return (
                        <PercentageBar
                          key={index}
                          label={item.text}
                          percent={item.percent}
                          backgroundClass={skill.backgroundClass}
                        />
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
