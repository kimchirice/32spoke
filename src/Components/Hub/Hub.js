import React,{ useContext } from 'react'
import { WheelContext } from '../../Context/WheelContext'

export default function Hub() {
  const {wheel, handleChange} = useContext(WheelContext);
  

    return (            
      <div>
        <h3>Hub details</h3>
        <form >
          <fieldset id="form--hub">
            <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="hubName">Hub Name</label>
                <input 
                    className="form-control"
                    type='text'
                    id='hubName' 
                    name='hubName' 
                    value={wheel.hubName} 
                    onChange={handleChange}
                    autoFocus 
                />
                <p className=""> optional</p>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="hubWeight">Hub weight</label>
                <input 
                    className="form-control"
                    type='text'
                    id='hubWeight' 
                    name='hubWeight' 
                    value={wheel.hubWeight} 
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
                    value={wheel.spokeHoleDiameter} 
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
                    value={wheel.leftFlangeDiameter} 
                    onChange={handleChange} 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="rightFlangeDiameter">Right Flange diameter</label>
                <input 
                    className="form-control"
                    type='text'
                    id='rightFlangeDiameter' 
                    name='rightFlangeDiameter' 
                    value={wheel.rightFlangeDiameter} 
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
                    value={wheel.leftFlangeToCenter} 
                    onChange={handleChange} 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="rightFlangeToCenter">Right Flange to Center</label>
                <input 
                    className="form-control"
                    type='text'
                    id='rightFlangeToCenter' 
                    name='rightFlangeToCenter' 
                    value={wheel.rightFlangeToCenter} 
                    onChange={handleChange} 
                />
              </div>
            </div>


              

            
          </fieldset>
        </form>
      </div>
    );
}
