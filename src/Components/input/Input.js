import React from 'react'
import PropTypes from 'prop-types'

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

Input.propTypes = {

}

export default Input

