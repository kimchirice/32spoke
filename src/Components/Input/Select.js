import React from 'react'

const Select = (props) => {
  return (
    <div className="form-row">
      <div className="form-group ">
        <label className="form-label" htmlFor={props.name}>
          {props.title}
        </label>
        <select 
            className="form-control"
            id={props.name} 
            name={props.name}
            value={props.value} 
            onChange={this.props.handleChange}
        >
          <option value="" disabled>
          </option>
          {props.options.map(option => {
            return (
              <option 
                key={option}
                value={option}
                label={option}>
                  {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  )
}
export default Select