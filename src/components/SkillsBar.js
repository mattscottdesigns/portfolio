import React from "react"

class PercentageBar extends React.Component {
  render() {
    const { props } = this

    return (
      <div>
        <div className="pb-1 text-xs opacity-75">{props.label}</div>
        <div className="flex mb-3">
          <div className="flex-grow rounded-sm bg-light">
            <div
              className={"py-2 rounded-sm " + props.backgroundClass}
              style={{
                width: props.percent + "%",
              }}
            ></div>
          </div>
        </div>
      </div>
    )
  }
}

export default PercentageBar
