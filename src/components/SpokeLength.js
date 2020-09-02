import React from 'react'

function SpokeLength({spokeLength}) {
  return (
  <>
      <p>Base on your input details</p>
      <ul>
        <li>hub</li>
        <li>rim</li>
        <li>spoke</li>
      </ul>
      <p>we suggest to use</p> 
      <p>right: {spokeLength[1]}mm spoke</p> 
      <p>left: {spokeLength[0]}mm spoke</p>
    </>
  )
}

export default SpokeLength;