import React from 'react'

const Rim = ({handleChange})=> {
  return (
    <>
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

    <div className="form-group ">
      <label className="form-label" htmlFor="rimWeight">Rim Weight</label>
      <input 
          className="form-control"
          type='text'
          id='rimWeight' 
          name='rimWeight' 
          onChange={(e) => handleChange(e.target.value)}          />
    </div>
   
      <div className="form-group ">
        <label className="form-label" htmlFor="rimERD">Rim E.R.D</label>
        <input 
            className="form-control"
            type='text'
            id='rimERD' 
            name='rimERD' 
            onChange={(e) => handleChange(e.target.value)}          />
      </div>

      <div className="form-group ">
        <label className="form-label" htmlFor="offsetSpokeBed">Offset Spoke Bed</label>
        <input 
            className="form-control"
            type='text'
            id='offsetSpokeBed' 
            name='offsetSpokeBed' 
            onChange={(e) => handleChange(e.target.value)}          />
      </div>
      <div className="form-group ">
        <label className="form-label" htmlFor="maxRimTension">Max Rim Tension</label>
        <input 
            className="form-control"
            type='text'
            id='maxRimTension' 
            name='maxRimTension' 
            onChange={(e) => handleChange(e.target.value)}          />
      </div>
    </>
  )
}

export default Rim;