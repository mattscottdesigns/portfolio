import React from "react"
import Heading from "./Heading"
import resume from "./../constants/resume"
import resumePDF from "./../images/resume-mattscott.pdf"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const Resume = () => {
  return (
    <div id="resume">
      <Heading text="Resume" />
      <div className="my-16 text-center">
        <a
          className="px-6 py-3 text-white rounded bg-primary"
          href={resumePDF}
          download
        >
          View Full Resume
        </a>
      </div>
      <div className="pr-5 mx-auto my-16 md:pr-10 md:pl-10">
        <VerticalTimeline>
          {resume.map((item, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                date={item.date}
                dateClassName="text-xl"
                className="text-dark"
              >
                <div className="text-xl font-bold">{item.title}</div>
                <div className="mb-5 text-primary">{item.company}</div>
                <div>{item.description}</div>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Resume
