import React,{ useContext } from 'react'
import { WheelContext } from '../../Context/WheelContext'

const Rim = () =>{
  const {wheel, handleChange} = useContext(WheelContext);
  
    return (            
      <div>
        <h3>Rim details</h3>
        <form >
          <fieldset id="form--rim">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="rimName">Rim Name</label>
                <input 
                    className="form-control"
                    type='text'
                    id='rimName' 
                    name='rimName' 
                    value={wheel.rimName} 
                    onChange={handleChange}
                    autoFocus 
                />
                <p className=""> optional</p>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="rimWeight">Rim Weight</label>
                <input 
                    className="form-control"
                    type='text'
                    id='rimWeight' 
                    name='rimWeight' 
                    value={wheel.rimWeight} 
                    onChange={handleChange} 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="rimERD">Rim E.R.D</label>
                <input 
                    className="form-control"
                    type='text'
                    id='rimERD' 
                    name='rimERD' 
                    value={wheel.rimERD} 
                    onChange={handleChange} 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="offsetSpokeBed">Offset Spoke Bed</label>
                <input 
                    className="form-control"
                    type='text'
                    id='offsetSpokeBed' 
                    name='offsetSpokeBed' 
                    value={wheel.offsetSpokeBed} 
                    onChange={handleChange} 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="maxRimTension">Max Rim Tension</label>
                <input 
                    className="form-control"
                    type='text'
                    id='maxRimTension' 
                    name='maxRimTension' 
                    value={wheel.maxRimTension} 
                    onChange={handleChange} 
                />
              </div>
            </div>

          </fieldset>
          
        </form>
      </div>
    );
}

export default Rim
