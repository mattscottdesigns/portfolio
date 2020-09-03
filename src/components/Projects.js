import React from "react"
import { projects } from "./../constants/projects"
import Heading from "./Heading"
import Project from "./Project"
import ProjectModal from "./ProjectModal"

class Projects extends React.Component {
  state = {
    activeProject: undefined,
  }

  setActiveProject(project) {
    this.setState({
      activeProject: project,
    })
  }

  hideActiveProject() {
    this.setState({
      activeProject: undefined,
    })
  }

  getProjectIndex() {}

  getPreviousProject() {}

  getNextProject() {}

  render() {
    return (
      <div id="projects" className="bg-dark">
        <Heading text="Projects" />
        <div className="flex flex-wrap justify-center px-10 py-16">
          {projects.map(project => {
            return (
              <div
                key={project.id}
                className="px-4 my-4 lg:w-1/4 md:w-1/3 sm:w-1/2"
                onClick={() => this.setActiveProject(project)}
              >
                <Project {...project} />
              </div>
            )
          })}
        </div>
        {this.state.activeProject && (
          <ProjectModal
            project={this.state.activeProject}
            height={95}
            width={85}
            measure={"%"}
            visible={this.state.activeProject ? true : false}
            onClose={this.hideActiveProject.bind(this)}
          />
        )}
      </div>
    )
  }
}

export default Projects
