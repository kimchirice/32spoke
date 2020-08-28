import React from 'react'

const Button = ({handleClick, title}) => {
  return (
  <button onClick={handleClick}>{title}</button>
  )
}

export default Button;