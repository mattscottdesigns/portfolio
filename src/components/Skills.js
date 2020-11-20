import React from "react"
import Heading from "./Heading"
import SkillsBar from "./SkillsBar"
import { skills } from "./../constants/skills"

const Skills = () => {
  return (
    <div id="skills">
      <Heading text="Skills" />
      <div className="max-w-5xl px-10 py-16 mx-auto">
        <div className="mb-4 font-light leading-7 text-md text-dark">
          During my career I have had the opportunity to work with a variety of
          products & departments. My main area of expertise is designing user
          interfaces for both mobile and web applications which I have designed
          by performing user research, creating wireframes, interactive
          prototypes, and performing heuristic evaluations. I also have
          experience working with marketing materials such as logos,
          powerpoints, and infographics. In addition to designing I am also a
          skilled frontend developer capable of using HTML, CSS, and JavaScript
          to implement the designs that I have created and working with other
          languages such as .NET and PHP.
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap -mx-5">
            {skills.map((skill, index) => {
              return (
                <div
                  className="w-full px-5 max-w-screen-xs md:w-1/3"
                  key={index}
                >
                  <div className="mt-10 mb-5 text-2xl font-medium">
                    {skill.title}
                  </div>
                  {skill.items.map((item, index) => {
                    return (
                      <SkillsBar
                        key={index}
                        label={item.text}
                        percent={item.percent}
                        backgroundClassName={skill.backgroundClass}
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

export default Skills
