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
    const activeClassName = "bg-white bg-opacity-75 text-dark"

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
              currentClassName="border border-light rounded"
            >
              <Link
                to={"/#about"}
                activeClassName={activeClassName}
                className="uppercase px-4 py-1"
              >
                About
              </Link>
              <Link
                to={"/#skills"}
                activeClassName={activeClassName}
                className="uppercase px-4 py-1"
              >
                Skills
              </Link>
              <Link
                to={"#projects"}
                activeClassName={activeClassName}
                className="uppercase px-4 py-1"
              >
                Projects
              </Link>
              <Link
                to={"#resume"}
                activeClassName={activeClassName}
                className="uppercase px-4 py-1"
              >
                Resume
              </Link>
              <Link
                to={"#contact"}
                activeClassName={activeClassName}
                className="uppercase px-4 py-1"
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
