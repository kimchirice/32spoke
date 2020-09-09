import React from 'react';

const Hub = ({handleChange, hub}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="hubName" className="form-label">Hub name</label>
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
 
        <div className="form-group ">
          <label className="form-label" htmlFor="hubWeight">Hub weight</label>
          <div className="d-flex">
          <input 
              className="form-control"
              type='text'
              id='hubWeight' 
              name='hubWeight'
              value={hub.hubWeight}
              onChange={handleChange} 
          /><div className="form-group-append">
          <span className="input-group-text"> g </span>
          </div> </div> 
        </div>
        <div className="form-group ">
          <label className="form-label" htmlFor="spokeHoleDiameter">Spoke hole diameter(mm)</label>
          <div className="d-flex">
            <input 
                className="form-control"
                type='text'
                id='spokeHoleDiameter' 
                name='spokeHoleDiameter'
                value={hub.spokeHoleDiameter} 
              onChange={handleChange} 
            />
            <div className="form-group-append">
                <span className="input-group-text">mm</span>  
            </div>
          </div>  
        </div>

        <div className="form-group ">
          <label className="form-label" htmlFor="leftFlangeDiameter">Left Flange diameter</label>
          <div className="d-flex">
            <input 
              className="form-control"
              type='text'
              id='leftFlangeDiameter' 
              name='leftFlangeDiameter'
              value={hub.leftFlangeDiameter}
              onChange={handleChange} 
            />
            <div className="form-group-append">
              <span className="input-group-text">mm</span>  
            </div>  
          </div>
        </div>
      
        <div className="form-group ">
          <label className="form-label" htmlFor="rightFlangeDiameter">Right Flange diameter</label>
          <div className="d-flex">
            <input 
              className="form-control"
              type='text'
              id='rightFlangeDiameter' 
              name='rightFlangeDiameter'
              value={hub.rightFlangeDiameter} 
              onChange={handleChange} 
            />
            <div className="form-group-append">
              <span className="input-group-text">mm</span>  
            </div>
          </div>
        </div>
      

        <div className="form-group ">
          <label className="form-label" htmlFor="leftFlangeToCenter">Left Flange to Center</label>
          <div className="d-flex">
            <input 
              className="form-control"
              type='text'
              id='leftFlangeToCenter' 
              name='leftFlangeToCenter'
              value={hub.leftFlangeToCenter} 
              onChange={handleChange} 
            />
            <div className="form-group-append">
              <span className="input-group-text">mm</span>  
            </div>  
          </div>
            
        </div>
        <div className="form-group ">
          <label className="form-label" htmlFor="rightFlangeToCenter">Right Flange to Center</label>
          <div className="d-flex">
            <input 
                className="form-control"
                type='text'
                id='rightFlangeToCenter' 
                name='rightFlangeToCenter'
                value={hub.rightFlangeToCenter} 
              onChange={handleChange} 
            />
            <div className="form-group-append">
              <span className="input-group-text">mm</span>
            </div>
          </div>  
          
        
      </div>
    </>
  )
}

export default Hub;
