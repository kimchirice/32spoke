import React from 'react'

const Input = props => {
  return (
    <div className="form-row">
      <div className="form-group ">
        <label className="form-label" htmlFor={props.name}>
          {props.title}
        </label>
        <input 
            className="form-control"
            type={props.inputType}
            id={props.name} 
            name={props.name}
            value={props.name} 
            onChange={props.handleChange}
            {...props}
        />
      </div>
    </div>
  )
}


export default Input
