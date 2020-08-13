import React from 'react'

function Input1(props) {
  return (
    <div className="form-row">
      <div className="form-group">
        <label className="form-label" htmlFor={props.name}>{props.title}</label>
<<<<<<< HEAD
        <input 
          className="form-control"
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleChange}
          {...props}
        />
      </div>
=======

      </div>
      
>>>>>>> 47bbe212d6dd2f26b77605f8ec8225033fb6b940
    </div>
  )
}



<<<<<<< HEAD
export default Input1 
=======
export default Input1

>>>>>>> 47bbe212d6dd2f26b77605f8ec8225033fb6b940
