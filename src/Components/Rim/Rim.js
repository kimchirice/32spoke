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
              <div className="form-group col-md-7">
                <label className="form-label" htmlFor="rimName">Rim Name</label>
                <input 
                    className="form-control"
                    type='text'
                    id='rimName' 
                    name='rimName' 
                    value={wheel.rimName} 
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

export default Rim
