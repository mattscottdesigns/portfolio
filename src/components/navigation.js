import React from "react"
import logo from "./../images/logo.svg"

class Navigation extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    if (window.pageYOffset > 0) {
      this.navigation.classList.add("bg-black")
      this.navigation.classList.add("bg-opacity-25")
    } else {
      this.navigation.classList.remove("bg-black")
      this.navigation.classList.remove("bg-opacity-25")
    }
  }

  render() {
    return (
      <div
        className="fixed top-0 right-0 left-0 text-white text-sm transition duration-500 ease-in-out"
        ref={ref => (this.navigation = ref)}
      >
        <div className="flex items-center p-4">
          <div className="mr-auto">
            <img className="img-logo" src={logo} />
          </div>
          <div className="hidden md:flex">
            <div className="uppercase px-4">About</div>
            <div className="uppercase px-4">Skills</div>
            <div className="uppercase px-4">Projects</div>
            <div className="uppercase px-4">Resume</div>
            <div className="uppercase px-4">Contact</div>
          </div>
          <div className="flex md:hidden">menu</div>
        </div>
      </div>
    )
  }
}

export default Navigation
