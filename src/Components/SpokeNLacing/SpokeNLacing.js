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
                  onChange={handleChange} >
                  
                  <option value="16">16</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                  <option value="24">24</option>
                  <option value="28">28</option>
                  <option value="32" selected>32</option>
                </select>
                    
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
                  onChange={handleChange} >
                  
                  <option value="0">ridial</option>
                  <option value="1">x1</option>
                  <option value="2">x2</option>
                  <option value="3" selected>x3</option>
                  <option value="4">x4</option>
                </select>
                    
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="numberOfSpokes">Lacing pattern right</label>
                <select 
                  className="form-control"
                  type='text'
                  id='lacingPatternRight' 
                  name='lacingPatternRight' 
                  value={wheel.lacingPatternRight} 
                  onChange={handleChange} >
                  
                  <option value="0">ridial</option>
                  <option value="1">x1</option>
                  <option value="2">x2</option>
                  <option value="3" selected>x3</option>
                  <option value="4">x4</option>
                </select>
                    
              </div>
            </div>

          </fieldset>
        </form>
      </div>
  );
}
