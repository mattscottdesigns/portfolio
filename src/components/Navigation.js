import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
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
      this.navigation.classList.add("bg-opacity-75")
      this.navigation.classList.add("shadow-lg")
    } else {
      this.navigation.classList.remove("bg-dark")
      this.navigation.classList.remove("bg-opacity-75")
      this.navigation.classList.remove("shadow-lg")
    }
  }

  render() {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-10 text-sm text-white transition duration-500 ease-in-out"
        ref={ref => (this.navigation = ref)}
      >
        <div className="flex items-center p-2">
          <div className="mr-auto">
            <img className="img-logo" src={logo} />
          </div>
          <div className="hidden md:flex">
            <Scrollspy
              items={["about", "skills", "projects", "resume", "contact"]}
              currentClassName="bg-light text-dark"
              offset={-100}
            >
              <AnchorLink href={"#about"} className="navigation-link">
                About
              </AnchorLink>
              <AnchorLink
                href={"#skills"}
                offset={65}
                className="navigation-link"
              >
                Skills
              </AnchorLink>
              <AnchorLink
                href={"#projects"}
                offset={65}
                className="navigation-link"
              >
                Projects
              </AnchorLink>
              <AnchorLink
                href={"#resume"}
                offset={65}
                className="navigation-link"
              >
                Resume
              </AnchorLink>
              <AnchorLink
                href={"#contact"}
                offset={65}
                className="navigation-link"
              >
                Contact
              </AnchorLink>
            </Scrollspy>
          </div>
          <div className="flex md:hidden">menu</div>
        </div>
      </div>
    )
  }
}

export default Navigation
