import React from 'react'

export default function Input2(props) {
  return (
    <div className="form-row">
      <div className="form-group">
        <label htmlFor={props.name} className="form-label">{props.title}</label>
      
      </div>
    </div>
  )
}
