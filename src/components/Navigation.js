import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import logo from "./../images/logo.svg"
import SlidingPane from "react-sliding-pane"
import "react-sliding-pane/dist/react-sliding-pane.css"
import navigation from "./../constants/navigation"
import { FaBars } from "react-icons/fa"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPaneOpen: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    if (window.pageYOffset > 0) {
      this.navigation.classList.add("bg-black")
      this.navigation.classList.add("bg-opacity-75")
      this.navigation.classList.add("shadow-lg")
    } else {
      this.navigation.classList.remove("bg-black")
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
          <div className="flex">
            <Scrollspy
              items={navigation}
              currentClassName="bg-light text-dark"
              offset={-150}
            >
              {navigation.map((link, index) => {
                return (
                  <AnchorLink
                    key={index}
                    href={"#" + link}
                    offset={65}
                    className="hidden navigation-link sm:inline-block"
                  >
                    {link}
                  </AnchorLink>
                )
              })}

              <div
                onClick={() => this.setState({ isPaneOpen: true })}
                className="navigation-link sm:hidden"
              >
                <FaBars className="text-3xl" />
              </div>
            </Scrollspy>
          </div>
        </div>
        <SlidingPane
          className="max-w-xs text-white duration-200 bg-black bg-opacity-90"
          overlayClassName="z-30"
          hideHeader={true}
          isOpen={this.state.isPaneOpen}
          onRequestClose={() => {
            this.setState({ isPaneOpen: false })
          }}
        >
          <Scrollspy
            items={navigation}
            currentClassName="bg-light text-dark"
            offset={-150}
          >
            {navigation.map((link, index) => {
              return (
                <AnchorLink
                  key={index}
                  href={"#" + link}
                  offset={65}
                  className="block navigation-link"
                  onClick={() => {
                    this.setState({ isPaneOpen: false })
                  }}
                >
                  {link}
                </AnchorLink>
              )
            })}
          </Scrollspy>
        </SlidingPane>
      </div>
    )
  }
}

export default Navigation
