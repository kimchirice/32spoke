import React,{ useContext } from 'react'
import { WheelContext } from '../../Context/WheelContext'

export default function SpokeNLacing() {
  const {wheel, handleChange} = useContext(WheelContext);
  
  
  return (            
      <div>
        <h3>Spoke & Lacing</h3>
        <form >
          <fieldset id="form--spokeNLacing">
            <div className="form-row">
              <div className="form-group col-md-7">
                <label className="form-label" htmlFor="spokeName">Spoke Name</label>
                <input 
                    className="form-control"
                    type='text'
                    id='spokeName' 
                    name='spokeName' 
                    value={wheel.spokeName} 
                    onChange={handleChange} 
                />
                <p className=""> optional</p>
              </div>
            </div>
          </fieldset>
          
        </form>
      </div>
    );
}
