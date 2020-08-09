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
              <div className="form-group">
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

            <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="spokeWeight">Spoke Weight</label>
                <input 
                    className="form-control"
                    type='text'
                    id='spokeWeight' 
                    name='spokeWeight' 
                    value={wheel.spokeWeight} 
                    onChange={handleChange} 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="numberOfSpokes">Number of Spokes</label>
                <select 
                  className="form-control"
                  type='text'
                  id='numberOfSpokes' 
                  name='numberOfSpokes' 
                  value={wheel.numberOfSpokes} 
                  onChange={handleChange} 
                >
                  <option value="32">32</option>
                  <option value="16">16</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                  <option value="24">24</option>
                  <option value="28">28</option>
                </select>
                    
              </div>
            </div>

          </fieldset>
        </form>
      </div>
  );
}
