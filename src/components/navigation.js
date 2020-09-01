import React from "react"
import { Link } from "gatsby"
import Scrollspy from "react-scrollspy"
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
      this.navigation.classList.add("bg-dark")
      this.navigation.classList.add("shadow-lg")
    } else {
      this.navigation.classList.remove("bg-dark")
      this.navigation.classList.remove("shadow-lg")
    }
  }

  render() {
    return (
      <div
        className="fixed top-0 right-0 left-0 text-white text-sm transition duration-500 ease-in-out z-10"
        ref={ref => (this.navigation = ref)}
      >
        <div className="flex items-center p-4">
          <div className="mr-auto">
            <img className="img-logo" src={logo} />
          </div>
          <div className="hidden md:flex">
            <Scrollspy
              items={["about", "skills", "projects", "resume", "contact"]}
              currentClassName="bg-light text-dark"
            >
              <Link
                to={"/#about"}
                className="rounded uppercase mx-2 px-4 py-1 transition duration-500 ease-in-out"
              >
                About
              </Link>
              <Link
                to={"/#skills"}
                className="rounded uppercase mx-2 px-4 py-1 transition duration-500 ease-in-out"
              >
                Skills
              </Link>
              <Link
                to={"#projects"}
                className="rounded uppercase mx-2 px-4 py-1 transition duration-500 ease-in-out"
              >
                Projects
              </Link>
              <Link
                to={"#resume"}
                className="rounded uppercase mx-2 px-4 py-1 transition duration-500 ease-in-out"
              >
                Resume
              </Link>
              <Link
                to={"#contact"}
                className="rounded uppercase mx-2 px-4 py-1 transition duration-500 ease-in-out"
              >
                Contact
              </Link>
            </Scrollspy>
          </div>
          <div className="flex md:hidden">menu</div>
        </div>
      </div>
    )
  }
}

export default Navigation
