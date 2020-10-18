import React from 'react'

function SpokeLength({hubName, rimName, spokeName, spokeLength, wheelWeight}) {
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
  <p>then your new wheel weights about {wheelWeight}</p>
    </>
  )
}

export default SpokeLength;