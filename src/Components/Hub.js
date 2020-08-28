import React from 'react';

function Hub({handleChange}) {
  return (
    <div >
      <label htmlFor="hubName">Hub Name</label>
      <input 
        type="text"
        id="hubName"
        name="hubName"
        onChange={(e) => handleChange(e.target.value)} 
      />
    </div>
  )
}

export default Hub;
