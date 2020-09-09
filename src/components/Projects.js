import React from "react"
import { projects } from "./../constants/projects"
import Heading from "./Heading"
import Project from "./Project"
import ProjectModal from "./ProjectModal"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class Projects extends React.Component {
  state = {
    projects: projects,
    activeProject: undefined,
    filter: "all",
  }

  componentDidMount() {
    this.setActiveFilter()
  }

  componentDidUpdate() {
    this.setActiveFilter()
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

  setActiveFilter() {
    this.all.classList.remove("bg-primary")
    this.development.classList.remove("bg-primary")
    this.design.classList.remove("bg-primary")
    this[this.state.filter].classList.add("bg-primary")
  }

  setFilter(newFilter) {
    this.setState({
      filter: newFilter,
    })
  }

  getProjectIndex(project) {
    if (project) {
      return projects.findIndex(i => i.id === project.id || "")
    }
  }

  getPreviousProject(next) {
    let currentIndex = this.getProjectIndex(this.state.activeProject)
    if (currentIndex == 0) {
      currentIndex = projects.length - 1
    } else {
      currentIndex = currentIndex - 1
    }
    this.setActiveProject(projects[currentIndex])
  }

  getNextProject() {
    let currentIndex = this.getProjectIndex(this.state.activeProject)
    if (currentIndex == projects.length - 1) {
      currentIndex = 0
    } else {
      currentIndex = currentIndex + 1
    }
    this.setActiveProject(projects[currentIndex])
  }

  render() {
    console.log(this.getProjectIndex(this.state.activeProject))

    const filteredProjects = projects.filter(project => {
      if (this.state.filter == "all") {
        return project
      }

      return project.type.indexOf(this.state.filter) > -1
    })

    return (
      <div id="projects" className="bg-dark">
        <Heading text="Projects" />
        <div className="mx-4 text-center">
          <div className="flex max-w-md p-1 mx-auto mt-16 mb-10 font-light text-center text-white bg-black bg-opacity-25 rounded-lg">
            <div
              className="w-1/3 px-2 py-1 m-2 transition duration-200 ease-in-out rounded cursor-pointer"
              onClick={() => this.setFilter("all")}
              ref={ref => (this.all = ref)}
            >
              All
            </div>
            <div
              className="w-1/3 px-2 py-1 m-2 transition duration-200 ease-in-out bg-transparent rounded cursor-pointer"
              onClick={() => this.setFilter("development")}
              ref={ref => (this.development = ref)}
            >
              Development
            </div>
            <div
              className="w-1/3 px-2 py-1 m-2 transition duration-200 ease-in-out bg-transparent rounded cursor-pointer"
              onClick={() => this.setFilter("design")}
              ref={ref => (this.design = ref)}
            >
              Design
            </div>
          </div>
        </div>
        <div className="flex flex-wrap px-10 pb-16 mx-auto">
          {filteredProjects.map(project => {
            return (
              <div
                key={project.id}
                className="w-full px-4 my-4 lg:w-1/4 md:w-1/3 sm:w-1/2"
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
            height={100}
            width={100}
            measure={"%"}
            visible={this.state.activeProject ? true : false}
            onClose={this.hideActiveProject.bind(this)}
            setActiveProject={this.setActiveProject.bind(this)}
            onNext={this.getNextProject.bind(this)}
            onPrevious={this.getPreviousProject.bind(this)}
          />
        )}
      </div>
    )
  }
}

export default Projects