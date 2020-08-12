import React from 'react'

function Input1(props) {
  return (
    <div className="form-row">
      <div className="form-group">
        <label className="form-label" htmlFor={props.name}>{props.title}</label>

      </div>
      
    </div>
  )
}



export default Input1

