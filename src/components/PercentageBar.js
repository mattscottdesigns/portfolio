import React from "react"

class PercentageBar extends React.Component {
  render() {
    const { props } = this

    return (
      <div className="flex bg-light mb-2">
        <div className="bg-dark text-light py-1 px-2 w-32 text-sm text-center">
          {props.label}
        </div>
        <div className="flex-grow">
          <div
            className={"bg-primary h-full " + props.backgroundClass}
            style={{
              width: props.percent + "%",
            }}
          ></div>
        </div>
        <div className="pl-4 py-1 text-sm text-medium bg-white">
          {props.percent}%
        </div>
      </div>
    )
  }
}

export default PercentageBar
