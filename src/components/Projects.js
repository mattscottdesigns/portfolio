import React, { useState } from "react"
import { projects } from "./../constants/projects"
import Heading from "./Heading"
import Project from "./Project"
import ProjectModal from "./ProjectModal"

const Projects = props => {
  const [selectedProject, setSelectedProject] = useState()

  const showProject = project => {
    document.body.classList.add("overflow-hidden")
    setSelectedProject(project)
  }

  const hideProject = project => {
    document.body.classList.remove("overflow-hidden")
    setSelectedProject(undefined)
  }

  const selectedProjectIndex = selectedProject
    ? projects.findIndex(i => i.id === selectedProject.id || "")
    : undefined

  return (
    <div id="projects" className="bg-dark">
      <Heading text="Projects" />
      <div className="flex flex-wrap px-4 py-16 mx-auto">
        {projects.map(project => {
          return (
            <a
              tabIndex={0}
              key={project.id}
              className="w-1/2 px-3 py-3 lg:w-1/4 md:w-1/3"
              onClick={() => showProject(project)}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  showProject(project)
                }
              }}
            >
              <Project {...project} />
            </a>
          )
        })}
      </div>
      <ProjectModal
        visible={selectedProject}
        projects={projects}
        onClose={hideProject}
        selectedProjectIndex={selectedProjectIndex}
      />
    </div>
  )
}

export default Projects
