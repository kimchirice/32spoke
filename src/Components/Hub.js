import React from 'react';

const Hub = ({handleChange, hub}) => {
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
          value={hub.hubName}
          onChange={handleChange}
          autoFocus 
        />
      </div>
      </div>
      <div className="form-row">
        <div className="form-group ">
          <label className="form-label" htmlFor="hubWeight">Hub weight(g)</label>
          <input 
              className="form-control"
              type='text'
              id='hubWeight' 
              name='hubWeight'
              value={hub.hubWeight}
              onChange={handleChange} 
          />  
        </div>
    
      </div>
      <div className="form-row">
        <div className="form-group ">
          <label className="form-label" htmlFor="spokeHoleDiameter">Spoke hole diameter(mm)</label>
          <input 
              className="form-control"
              type='text'
              id='spokeHoleDiameter' 
              name='spokeHoleDiameter'
              value={hub.spokeHoleDiameter} 
            onChange={handleChange} 
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group ">
          <label className="form-label" htmlFor="leftFlangeDiameter">Left Flange diameter(mm)</label>
          <input 
              className="form-control"
              type='text'
              id='leftFlangeDiameter' 
              name='leftFlangeDiameter'
              value={hub.leftFlangeDiameter}
            onChange={handleChange} 
          />
        </div>
      
        <div className="form-group ">
          <label className="form-label" htmlFor="rightFlangeDiameter">Right Flange diameter(mm)</label>
          <input 
              className="form-control"
              type='text'
              id='rightFlangeDiameter' 
              name='rightFlangeDiameter'
              value={hub.rightFlangeDiameter} 
            onChange={handleChange} 
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group ">
          <label className="form-label" htmlFor="leftFlangeToCenter">Left Flange to Center(mm)</label>
          <input 
              className="form-control"
              type='text'
              id='leftFlangeToCenter' 
              name='leftFlangeToCenter'
              value={hub.leftFlangeToCenter} 
            onChange={handleChange} 
          />    
        </div>
        <div className="form-group ">
          <label className="form-label" htmlFor="rightFlangeToCenter">Right Flange to Center(mm)</label>
          <input 
              className="form-control"
              type='text'
              id='rightFlangeToCenter' 
              name='rightFlangeToCenter'
              value={hub.rightFlangeToCenter} 
            onChange={handleChange} 
          />
        </div>
      </div>
    </>
  )
}

export default Hub;
