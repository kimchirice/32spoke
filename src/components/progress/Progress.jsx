import React from 'react'

function Progress({ currentStep }) {

  const width = currentStep * 25

  return (
    <div className="progress my-2">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow={{ width }}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  )
}

export default Progress