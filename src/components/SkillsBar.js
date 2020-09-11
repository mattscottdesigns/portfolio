import React from "react"

const SkillsBar = props => {
  return (
    <div className="mb-4">
      <div className="pb-1 text-sm font-light tracking-wide opacity-90">
        {props.label}
      </div>
      <div className="flex">
        <div className="flex-grow rounded bg-light">
          <div
            className={"h-5 rounded " + props.backgroundClassName}
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
