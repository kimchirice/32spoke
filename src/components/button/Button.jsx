import React from 'react'
const Button = ({ handleClick, title, classNames }) => {
  return (
    <button onClick={handleClick} type="button" className={classNames} >{title}</button>
  )
}

export default Button