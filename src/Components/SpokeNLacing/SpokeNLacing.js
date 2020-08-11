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
              value={props.wheel.numberOfSpokes}
              handleChange={props.handleChange}
              
              <option value="16">16</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                  <option value="24">24</option>
                  <option value="28">28</option>
                  <option value="32" selected>32</option>
            />

            <Select 
              title={"Lacing pattern left"}
              name={"lacingPatternLeft"}
              value={props.wheel.lacingPatternLeft}
              handleChange={props.handleChange}

              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3" selected>3</option>
              <option value="4">4</option>
                 
            />
            <Select 
              title={"Lacing pattern left"}
              name={"lacingPatternRight"}
              value={props.wheel.lacingPatternRight}
              handleChange={props.handleChange}

              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3" selected>3</option>
              <option value="4">4</option>
                 
            />
          </fieldset>
        </form>
      </div>
  );
}

export default SpokeNLacing