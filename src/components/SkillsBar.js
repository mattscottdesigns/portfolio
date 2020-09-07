import React from "react"

class PercentageBar extends React.Component {
  render() {
    const { props } = this

    return (
      <div className="flex mb-2">
        <div className="w-32 px-2 py-2 text-xs text-center rounded-tl rounded-bl md:w-48 md:text-sm bg-dark text-light">
          {props.label}
        </div>
        <div className="flex-grow rounded-tr rounded-br bg-light">
          <div
            className={
              "bg-primary h-full rounded-br rounded-tr " + props.backgroundClass
            }
            style={{
              width: props.percent + "%",
            }}
          ></div>
        </div>
        <div className="py-2 pl-4 text-sm bg-white text-medium">
          {props.percent}%
        </div>
      </div>
    )
  }
}

export default PercentageBar
