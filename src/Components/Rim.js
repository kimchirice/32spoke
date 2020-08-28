import React from 'react'

const Rim = ({handleChange})=> {
  return (
    <div>
      <label htmlFor="rimName" className="form-label">Rim Name</label>
      <input
        className="form-control"
        type='text'
        id="rimName"
        name='rimName'
        onChange={(e) => handleChange(e.target.value)}
        />
    </div>
  )
}

export default Rim;