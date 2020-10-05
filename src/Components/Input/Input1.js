import React from 'react'

function Input1(props) {
  return (
    <div className="form-row">
      <div className="form-group">
        <label className="form-label" htmlFor={props.name}>{props.title}</label>
        <input 
          className="form-control"
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          value={props.wheel.value}
          onChange={props.handleChange}
          {...props}
        />
      </div>
    </div>
  )
}



export default Input1

