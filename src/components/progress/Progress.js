import React from 'react';

function Progress({currentStep}) {
  
  let width = currentStep * 25;
  return (
      <div>
        {width}    
      </div>
  )
}

export default Progress;