import React from 'react';

function Progress({currentStep}) {
  
  let width = currentStep * 25;
  return (
      <div>
        {currentStep}    
      </div>
  )
}

export default Progress;