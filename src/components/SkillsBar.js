import React from "react"

const SkillsBar = props => {
  const { label, backgroundClassName, percent } = props

  return (
    <div className="mb-4">
      <div className="pb-1 text-sm font-light tracking-wide opacity-90">
        {label}
      </div>
      <div className="flex">
        <div className="flex-grow rounded bg-light">
          <div
            className={"h-5 rounded " + backgroundClassName}
            style={{
              width: percent + "%",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default SkillsBar
