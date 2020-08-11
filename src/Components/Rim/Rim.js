import React from 'react'
import Input from '../Input/Input'

const Rim = (props) =>{
    return (            
      <div>
        <h3>Rim details</h3>
        <form >
          <fieldset id="form--rim">
            <Input 
              inputType={'text'}
              title={"Rim name"}
              name={'rimName'}
              value={props.rimName}
              handleChange={props.handleChange}
            />
            <Input 
              inputType={'text'}
              title={"Rim weight"}
              name={'rimWeight'}
              value={props.rimWeight}
              handleChange={props.handleChange}
            />
             <Input 
              inputType={'text'}
              title={"Rim ERD"}
              name={'rimERD'}
              value={props.rimERD}
              handleChange={props.handleChange}
            />
             <Input 
              inputType={'text'}
              title={"Offset Spoke Bed"}
              name={'offsetSpokeBed'}
              value={props.offsetSpokeBed}
              handleChange={props.handleChange}
            />
             <Input 
              inputType={'text'}
              title={"Max Rim Tension"}
              name={'maxRimTension'}
              value={props.maxRimTension}
              handleChange={props.handleChange}
            />
          </fieldset>
          
        </form>
      </div>
    );
}

export default Rim
