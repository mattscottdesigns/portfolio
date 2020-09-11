import React from "react"
import Heading from "./Heading"
import SkillsBar from "./SkillsBar"
import skills from "./../constants/skills"

const Skills = () => {
  return (
    <div id="skills">
      <Heading text="Skills" />
      <div className="max-w-5xl px-10 py-16 mx-auto">
        <div className="font-light leading-7 text-md text-dark">
          Throughout my life I have always been drawn to making things look
          good. At first it started off with just designing some logos and
          websites for friends. Naturally I got curious about the development
          side of things and starting learning technologies such as HTML/CSS,
          JavaScript, and server side languages like PHP to create interactive
          websites and prototypes. With that skillset I discovered my passion
          for creating minimal user interfaces while giving the user the best
          experience possible.
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
