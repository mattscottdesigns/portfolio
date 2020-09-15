import React from "react"
import { projects } from "./../constants/projects"
import Heading from "./Heading"
import Project from "./Project"
import ProjectModal from "./ProjectModal"

class Projects extends React.Component {
  state = {
    projects: projects,
    selectedProject: undefined,
    filter: "all",
  }

  componentDidMount() {
    this.handleFilterStyles()
  }

  componentDidUpdate() {
    this.handleFilterStyles()
  }

  showSelectedProject(project) {
    const body = document.querySelector("body")
    body.classList.add("overflow-hidden")

    this.setState({
      selectedProject: project,
    })
  }

  hideSelectedProject() {
    const body = document.querySelector("body")
    body.classList.remove("overflow-hidden")

    this.setState({
      selectedProject: undefined,
    })
  }

  handleFilterStyles() {
    this.all.classList.remove("bg-primary")
    this.development.classList.remove("bg-primary")
    this.design.classList.remove("bg-primary")
    this[this.state.filter].classList.add("bg-primary")
  }

  setFilter(newFilter) {
    this.setState({
      filter: newFilter,
      projects: projects.filter(project => {
        if (newFilter === "all") {
          return project
        }
        return project.type.indexOf(newFilter) > -1
      }),
    })
  }

  getProjectIndex(project) {
    if (project) {
      return this.state.projects.findIndex(i => i.id === project.id || "")
    }
  }

  render() {
    const { projects, selectedProject } = this.state
    const selectedProjectIndex = this.getProjectIndex(selectedProject)

    return (
      <div id="projects" className="bg-dark">
        <Heading text="Projects" />
        <div className="mx-4 text-center">
          <div className="flex max-w-md p-1 mx-auto mt-16 mb-10 font-light text-center text-white bg-black bg-opacity-25 rounded-lg">
            <div
              className="w-1/3 p-2 m-2 transition duration-200 ease-in-out rounded cursor-pointer"
              onClick={() => this.setFilter("all")}
              ref={ref => (this.all = ref)}
            >
              All
            </div>
            <div
              className="w-1/3 p-2 m-2 transition duration-200 ease-in-out bg-transparent rounded cursor-pointer"
              onClick={() => this.setFilter("development")}
              ref={ref => (this.development = ref)}
            >
              Development
            </div>
            <div
              className="w-1/3 p-2 m-2 transition duration-200 ease-in-out bg-transparent rounded cursor-pointer"
              onClick={() => this.setFilter("design")}
              ref={ref => (this.design = ref)}
            >
              Design
            </div>
          </div>
        </div>
        <div className="flex flex-wrap px-4 pb-16 mx-auto">
          {projects.map(project => {
            return (
              <div
                key={project.id}
                className="w-1/2 px-4 my-4 lg:w-1/4 md:w-1/3"
                onClick={() => this.showSelectedProject(project)}
              >
                <Project {...project} />
              </div>
            )
          })}
        </div>
        {selectedProject && (
          <ProjectModal
            projects={projects}
            onClose={this.hideSelectedProject.bind(this)}
            selectedProjectIndex={selectedProjectIndex}
          />
        )}
      </div>
    )
  }
}

export default Projects
