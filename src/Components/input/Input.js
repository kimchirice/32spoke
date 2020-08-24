import React from 'react'

function Input(props) {
  return (
      <div className="form-group">
          <label className="form-label" htmlFor={props.name}>{props.title}</label>
        <input 
          className="form-control"
          type={props.inputType}
          name={props.name}
          id={props.name}
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
  )
}

export default Input

