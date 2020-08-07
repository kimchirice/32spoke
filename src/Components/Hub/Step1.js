import React from 'react'
import { WheelContext } from '../../Context/WheelContext'
import { useContext } from 'react';

function Step1() {
  const {wheel, handleChange} = useContext(WheelContext);
  render() {
    return (            
      <div>
        <h3>Hub details</h3>
        <form class="">
          <fieldset id="form--hub">
            <div className="form-row">
              <div className="form-group col-md-7">
                <label class="form-label" htmlFor="hubName">Hub Name</label>
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
          </fieldset>
          <button type="button" className="btn btn-primary">PreV</button>
          <button onClick={handleClick} type="button" className="btn btn-warning">Next</button>
        </form>
      </div>
    );
  };
}
