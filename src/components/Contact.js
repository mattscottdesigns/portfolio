import React from "react"
import Heading from "./Heading"
import ContactForm from "./ContactForm"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { FaEnvelopeSquare } from "react-icons/fa"

const Contact = () => {
  return (
    <div id="contact">
      <Heading text="Contact" />
      <div className="bg-dark">
        <div className="flex justify-center p-3 text-4xl bg-black bg-opacity-25 text-light">
          <a href="https://github.com/mattscottdesigns">
            <FaGithubSquare className="mx-3" />
          </a>
          <a href="https://www.linkedin.com/in/matthew-taylor-scott/">
            <FaLinkedin className="mx-3" />
          </a>
          <a href="mailto:matt.taylor.scott@gmail.com">
            <FaEnvelopeSquare className="mx-3" />
          </a>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
