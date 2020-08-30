import React from 'react'

const Rim = ({handleChange, parts})=> {
  return (
    <>
    <div>
      <label htmlFor="rimName" className="form-label">Rim Name</label>
      <input
        className="form-control"
        type='text'
        id="rimName"
        name='rimName'
        value={parts.rimName}
        onChange={handleChange}
        autoFocus
        />
    </div>

    <div className="form-group ">
      <label className="form-label" htmlFor="rimWeight">Rim Weight</label>
      <input 
          className="form-control"
          type='text'
          id='rimWeight' 
          name='rimWeight'
          value={parts.rimWeight} 
          onChange={handleChange}          />
    </div>
   
      <div className="form-group ">
        <label className="form-label" htmlFor="rimERD">Rim E.R.D</label>
        <input 
            className="form-control"
            type='text'
            id='rimERD' 
            name='rimERD'
            value={parts.rimERD} 
            onChange={handleChange}          />
      </div>

      <div className="form-group ">
        <label className="form-label" htmlFor="offsetSpokeBed">Offset Spoke Bed</label>
        <input 
            className="form-control"
            type='text'
            id='offsetSpokeBed' 
            name='offsetSpokeBed'
            value={parts.offsetSpokeBed} 
            onChange={handleChange}          />
      </div>
      <div className="form-group ">
        <label className="form-label" htmlFor="maxRimTension">Max Rim Tension</label>
        <input 
            className="form-control"
            type='text'
            id='maxRimTension' 
            name='maxRimTension'
            value={parts.maxRimTension} 
            onChange={handleChange}          />
      </div>
    </>
  )
}

export default Rim;