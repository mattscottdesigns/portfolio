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
        <div className="px-10 py-16">
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
