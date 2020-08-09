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
              

            
          </fieldset>
        </form>
      </div>
    );
}
