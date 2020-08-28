import React from 'react';

const Hub = ({handleChange}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="hubName" className="form-label">Hub Name</label>
        <input
          className="form-control" 
          type="text"
          id="hubName"
          name="hubName"
          onChange={(event) => handleChange(event)} 
        />
      </div>
   
      <div className="form-group ">
        <label className="form-label" htmlFor="hubWeight">Hub weight</label>
        <input 
            className="form-control"
            type='text'
            id='hubWeight' 
            name='hubWeight' 
            onChange={(event) => handleChange(event)} 
        />
      </div>
    
    
      <div className="form-group ">
        <label className="form-label" htmlFor="spokeHoleDiameter">Spoke hole diameter</label>
        <input 
            className="form-control"
            type='text'
            id='spokeHoleDiameter' 
            name='spokeHoleDiameter' 
            onChange={(event) => handleChange(event)} 
        />
      </div>
    
      <div className="form-group ">
        <label className="form-label" htmlFor="leftFlangeDiameter">Left Flange diameter</label>
        <input 
            className="form-control"
            type='text'
            id='leftFlangeDiameter' 
            name='leftFlangeDiameter' 
            onChange={(event) => handleChange(event)} 
        />
      </div>
    
      <div className="form-group ">
        <label className="form-label" htmlFor="rightFlangeDiameter">Right Flange diameter</label>
        <input 
            className="form-control"
            type='text'
            id='rightFlangeDiameter' 
            name='rightFlangeDiameter' 
            onChange={(event) => handleChange(event)} 
        />
      </div>
  
      <div className="form-group ">
        <label className="form-label" htmlFor="leftFlangeToCenter">Left Flange to Center</label>
        <input 
            className="form-control"
            type='text'
            id='leftFlangeToCenter' 
            name='leftFlangeToCenter' 
            onChange={(event) => handleChange(event)} 
        />    
      </div>

      <div className="form-group ">
        <label className="form-label" htmlFor="rightFlangeToCenter">Right Flange to Center</label>
        <input 
            className="form-control"
            type='text'
            id='rightFlangeToCenter' 
            name='rightFlangeToCenter' 
            onChange={(event) => handleChange(event)} 
        />
      </div>
    </>
  )
}

export default Hub;
