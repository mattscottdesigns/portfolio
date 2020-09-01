import React from "react"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Resume from "../components/Resume"
import Contact from "../components/Contact"
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
