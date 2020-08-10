import React from 'react'
import PropTypes from 'prop-types'

const Input = props => {
  return (
    <div className="form-row">
      <div className="form-group ">
  <label className="form-label" htmlFor={props.name}>{props.title}</label>
        <input 
            className="form-control"
            type='text'
            id={props.name} 
            name={props.name}
            value={props.name} 
            onChange={props.handleChange} 
        />
      </div>
    </div>
  )
}

Input.propTypes = {

}

export default Input
