import React from 'react'

function Progress({currentStep}) {
  let width = currentStep * 25
// todos: 
//  - should return progress percentage instead of currentStep
  return (
    <div>
      {currentStep}
    </div>
  )
}

export default Progress;