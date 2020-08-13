import React from 'react'
import Input from '../Input/Input'

const Hub = (props) => {
  // const {wheel, handleChange} = useContext(WheelContext);
  // how to pass the function handleChange() from Wheel to Hub, then add it to input and select components
    console.log(props);
    return (            
      <div>
        <h3>Hub details</h3>
        <form >
          <fieldset id="form--hub">
            <Input 
              inputType={'text'}
              title={"Hub name"}
              name={'hubName'}
              value={props.hubName}
              handleChange={props.handleChange}
            />
            <Input 
              inputType={'text'}
              title={"Hub weight"}
              name={'hubWeight'}
              value={props.hubWeight}
              handleChange={props.handleChange}
            />
            <Input  
              inputType={'text'}
              title={"Spoke hole diameter"}
              name={'spokeHoleDiameter'}
              value={props.spokeHoleDiameter}
              handleChange={props.handleChange}
            />
             <Input  
              inputType={'text'}
              title={"Left Flange diameter"}
              name={'leftFlangeDiameter'}
              value={props.leftFlangeDiameter}
              handleChange={props.handleChange}
            />
            <Input  
              inputType={'text'}
              title={"Right Flange diameter"}
              name={'rightFlangeDiameter'}
              value={props.rightFlangeDiameter}
              handleChange={props.handleChange}
            />
             <Input  
              inputType={'text'}
              title={"Left Flange to Center"}
              name={'leftFlangeToCenter'}
              value={props.leftFlangeToCenter}
              handleChange={props.handleChange}
            />
             <Input  
              inputType={'text'}
              title={"Right Flange to Center"}
              name={'rightFlangeToCenter'}
              value={props.rightFlangeToCenter}
              handleChange={props.handleChange}
            />
          </fieldset>
        </form>
      </div>
    );
}

export default Hub;