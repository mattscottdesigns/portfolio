import React from "react"
import Heading from "./Heading"
import resume from "./../constants/resume"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

class Resume extends React.Component {
  render() {
    return (
      <div id="resume">
        <Heading text="Resume" />
        <div className="py-16 pr-5 mx-auto md:pr-10 md:pl-10">
          <VerticalTimeline>
            {resume.map((item, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  date={item.date}
                  className="text-dark"
                >
                  <div className="text-xl font-bold">{item.title}</div>
                  <div className="mb-5 font-thin text-primary">
                    {item.company}
                  </div>
                  <div>{item.description}</div>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </div>
      </div>
    )
  }
}

export default Resume
