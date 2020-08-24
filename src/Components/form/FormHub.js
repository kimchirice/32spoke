import React from 'react'
import Input from '../input/Input'

export default function Hub(props) {  
    return (            
      <div>
        <h3>Hub details</h3>
        <form >
          <fieldset id="form--hub">
            <div className="form-row">
              <Input 
                title={'Hub Name'}
                id={'hubName'}
                name={'hubName'}
                value={props.value}
                onChange={props.handleChange}
                autoFocus
              />
                {/* <input 
                    className="form-control"
                    type='text'
                    id='hubName' 
                    name='hubName' 
                    value={props.wheel.hubName} 
                    onChange={props.handleChange}
                    autoFocus 
                /> */}
                {/* <p className=""> optional</p> */}
              {/* </div> */}
            </div> 
            {/* <div className="form-row">
              <div className="form-group ">
                <label className="form-label" htmlFor="hubWeight">Hub weight</label>
                <input 
                    className="form-control"
                    type='text'
                    id='hubWeight' 
                    name='hubWeight' 
                    value={wheel.hubWeight} 
                    onChange={props.handleChange} 
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
                    onChange={props.handleChange} 
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
                    onChange={props.handleChange} 
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
                    onChange={props.handleChange} 
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
                    onChange={props.handleChange} 
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
                    onChange={props.handleChange} 
                />
              </div>
            </div>


               */}

            
          </fieldset>
        </form>
      </div>
    );
}
