import React from 'react'

function SpokeLength({length}) {
  return (
    <>
    <p>Base on your input details</p>
    <ul>
      <li>hub</li>
      <li>rim</li>
      <li>spoke</li>
    </ul>
    <p>we suggest to use {length}mm spoke</p>
    </>
  )
}

export default SpokeLength