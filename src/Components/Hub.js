import React from 'react';

const Hub = ({handleChange}) => {
  return (
    <><div className="form-group">
      <label htmlFor="hubName" className="form-label">Hub Name</label>
      <input
        className="form-control" 
        type="text"
        id="hubName"
        name="hubName"
        onChange={(e) => handleChange(e.target.value)} 
      />
    </div>
   
      <div className="form-group ">
        <label className="form-label" htmlFor="hubWeight">Hub weight</label>
        <input 
            className="form-control"
            type='text'
            id='hubWeight' 
            name='hubWeight' 
            onChange={(e) => handleChange(e.target.value)} 
        />
      </div>
    
    
      <div className="form-group ">
        <label className="form-label" htmlFor="spokeHoleDiameter">Spoke hole diameter</label>
        <input 
            className="form-control"
            type='text'
            id='spokeHoleDiameter' 
            name='spokeHoleDiameter' 
            onChange={(e) => handleChange(e.target.value)}                />
      </div>
    
      <div className="form-group ">
        <label className="form-label" htmlFor="leftFlangeDiameter">Left Flange diameter</label>
        <input 
            className="form-control"
            type='text'
            id='leftFlangeDiameter' 
            name='leftFlangeDiameter' 
            onChange={(e) => handleChange(e.target.value)}                />
      </div>
    
      <div className="form-group ">
        <label className="form-label" htmlFor="rightFlangeDiameter">Right Flange diameter</label>
        <input 
            className="form-control"
            type='text'
            id='rightFlangeDiameter' 
            name='rightFlangeDiameter' 
            onChange={(e) => handleChange(e.target.value)}                />
      </div>
  
      <div className="form-group ">
        <label className="form-label" htmlFor="leftFlangeToCenter">Left Flange to Center</label>
        <input 
            className="form-control"
            type='text'
            id='leftFlangeToCenter' 
            name='leftFlangeToCenter' 
            onChange={(e) => handleChange(e.target.value)}                />
      </div>

      <div className="form-group ">
        <label className="form-label" htmlFor="rightFlangeToCenter">Right Flange to Center</label>
        <input 
            className="form-control"
            type='text'
            id='rightFlangeToCenter' 
            name='rightFlangeToCenter' 
            onChange={(e) => handleChange(e.target.value)} 
        />
      </div>
    </>
  )
}

export default Hub;
