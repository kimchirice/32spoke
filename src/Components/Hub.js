import React from 'react';

const Hub = ({handleChange, parts}) => {
  console.log()
  return (
    <>
      <div className="form-row">
      <div className="form-group">
        <label htmlFor="hubName" className="form-label">Hub Name</label>
        <input
          className="form-control" 
          type="text"
          id="hubName"
          name="hubName"
          value={parts.hubName}
          onChange={handleChange}
          autoFocus 
        />
      </div>
   </div><div className="form-row">
      <div className="form-group ">
        <label className="form-label" htmlFor="hubWeight">Hub weight</label>
        <input 
            className="form-control"
            type='text'
            id='hubWeight' 
            name='hubWeight'
            value={parts.hubWeight}
            onChange={handleChange} 
        />  
      </div>
    
    </div>
    <div className="form-row">
      <div className="form-group ">
        <label className="form-label" htmlFor="spokeHoleDiameter">Spoke hole diameter</label>
        <input 
            className="form-control"
            type='text'
            id='spokeHoleDiameter' 
            name='spokeHoleDiameter'
            value={parts.spokeHoleDiameter} 
          onChange={handleChange} 
        />
      </div>
      </div>
      <div className="form-row">
      <div className="form-group ">
        <label className="form-label" htmlFor="leftFlangeDiameter">Left Flange diameter</label>
        <input 
            className="form-control"
            type='text'
            id='leftFlangeDiameter' 
            name='leftFlangeDiameter'
            value={parts.leftFlangeDiameter}
          onChange={handleChange} 
        />
      </div>
    
      <div className="form-group ">
        <label className="form-label" htmlFor="rightFlangeDiameter">Right Flange diameter</label>
        <input 
            className="form-control"
            type='text'
            id='rightFlangeDiameter' 
            name='rightFlangeDiameter'
            value={parts.rightFlangeDiameter} 
          onChange={handleChange} 
        />
      </div>
      </div>
      <div className="form-row">

      
      <div className="form-group ">
        <label className="form-label" htmlFor="leftFlangeToCenter">Left Flange to Center</label>
        <input 
            className="form-control"
            type='text'
            id='leftFlangeToCenter' 
            name='leftFlangeToCenter'
            value={parts.leftFlangeToCenter} 
          onChange={handleChange} 
        />    
      </div>

      <div className="form-group ">
        <label className="form-label" htmlFor="rightFlangeToCenter">Right Flange to Center</label>
        <input 
            className="form-control"
            type='text'
            id='rightFlangeToCenter' 
            name='rightFlangeToCenter'
            value={parts.rightFlangeToCenter} 
          onChange={handleChange} 
        />
      </div>
      </div>
    </>
  )
}

export default Hub;
