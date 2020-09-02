import React from 'react'

function SpokeLength({hubName, rimName, spokeName, spokeLength}) {
  return (
  <>
      <p>Base on your input details</p>
      <ul>
        <li>hub: {hubName}</li>
        <li>rim: {rimName} </li>
        <li>spoke: {spokeName}</li>
      </ul>
      <p>we suggest to use</p> 
      <p>{spokeLength[1]}mm spoke for right side</p> 
      <p>and {spokeLength[0]}mm for left side</p>
    </>
  )
}

export default SpokeLength;