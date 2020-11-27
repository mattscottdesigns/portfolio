import React, { useState, useEffect, useRef } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import logo from "./../images/logo.svg"
import SlidingPane from "react-sliding-pane"
import "react-sliding-pane/dist/react-sliding-pane.css"
import navigation from "./../constants/navigation"
import { FaBars } from "react-icons/fa"

const Navigation = props => {
  const navigationRef = useRef()
  const [showSidebar, setSidebar] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      navigationRef.current.classList.add("navigation-link-active")
    } else {
      navigationRef.current.classList.remove("navigation-link-active")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-10 text-sm text-white transition duration-500 ease-in-out"
      ref={navigationRef}
    >
      <div className="flex items-center p-2">
        <div className="mr-auto">
          <img className="img-logo" src={logo} alt="Matt Scott Designs" />
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
              onClick={() => setSidebar(true)}
              className="navigation-link sm:hidden"
            >
              <FaBars className="text-3xl" />
            </div>
          </Scrollspy>
        </div>
      </div>
      <SlidingPane
        className="max-w-xs text-white duration-200 bg-dark "
        overlayClassName="z-30"
        hideHeader={true}
        isOpen={showSidebar}
        onRequestClose={() => {
          setSidebar(false)
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
                className="block my-2 navigation-link"
                onClick={() => {
                  setSidebar(false)
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

export default Navigation
