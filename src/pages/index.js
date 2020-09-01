import React from "react"
import Layout from "./../components/layout"
import Navigation from "./../components/navigation"
import About from "./../components/about"
import Skills from "./../components/skills"
import Projects from "./../components/projects"
import Resume from "./../components/resume"
import Contact from "./../components/contact"
import "./../css/main.css"

const IndexPage = () => (
  <Layout>
    <Navigation />
    <About />
    <Skills />
    <Projects />
    <Resume />
    <Contact />
  </Layout>
)

export default IndexPage
