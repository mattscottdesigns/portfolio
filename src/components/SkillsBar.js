import React from "react"

const SkillsBar = props => {
  console.log(props)
  return (
    <div>
      <div className="pb-1 text-xs font-light tracking-wide text-medium">
        {props.label}
      </div>
      <div className="flex mb-3">
        <div className="flex-grow rounded-sm bg-light">
          <div
            className={"py-2 rounded-sm " + props.backgroundClassName}
            style={{
              width: props.percent + "%",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default SkillsBar
