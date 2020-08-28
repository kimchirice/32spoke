import React from 'react';

const Spoke = ({handleChange}) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor="spokeName">Spoke Name</label>
      <input 
        className="form-control"
        type='text'
        id="spokeName"
        name='spokeName'
        onChange={(e)=> handleChange(e.target.value)}
      />
    </div>
  )
}

export default Spoke;