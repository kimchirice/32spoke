import React from 'react'
import Input from '../Input/Input'
import Select from '../Input/Select'

const SpokeNLacing = (props) => {
  return (            
      <div>
        <h3>Spoke & Lacing</h3>
        <form >
          <fieldset id="form--spokeNLacing">
          <Input 
              inputType={'text'}
              title={"Spoke name"}
              name={'spokeName'}
              value={props.spokeName}
              handleChange={props.handleChange}
            />
            <Input 
              inputType={'text'}
              title={"Spoke weight"}
              name={'spokeWeight'}
              value={props.spokeWeight}
              handleChange={props.handleChange}
            />

            <Select 
              title={"Number of spokes"}
              name={"numberOfSpokes"}
              options={props.optionsNumberOfSpokes}
              value={props.wheel.numberOfSpokes}
              handleChange={props.handleChange}
               />
            <Select 
              title={"Lacing pattern left"}
              name={"lacingPatternLeft"}
              options={props.optionsLacingPatter}
              value={props.wheel.lacingPatternLeft}
              handleChange={props.handleChange}
               />
            <Select 
              title={"Lacing pattern left"}
              name={"lacingPatternRight"}
              options={props.optionsLacingPatter}
              value={props.wheel.lacingPatternRight}
              handleChange={props.handleChange}
               />
   ]
          </fieldset>
        </form>
      </div>
  );
}

export default SpokeNLacing