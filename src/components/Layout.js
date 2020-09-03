import React from "react"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class Layout extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

export default Layout
