import React from 'react';

const Hub = ({handleChange}) => {
  return (
    <div >
      <label htmlFor="hubName">Hub Name</label>
      <input
        className="form-control" 
        type="text"
        id="hubName"
        name="hubName"
        onChange={(e) => handleChange(e.target.value)} 
      />
    </div>
  )
}

export default Hub;
