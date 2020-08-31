import React from 'react';

function Progress({currentStep}) {
  
  let width = currentStep * 25;
  console.log(width)
  return (
      <div>
        {currentStep}    
      </div>
  )
}

export default Progress;