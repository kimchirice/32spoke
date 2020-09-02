import React from 'react'

export default function About() {
  return (
    <div className="text-left ">
      <h6>32spoke helps wheelbuilder to calculate spoke length for the new build</h6>
      <h6>wheel variables</h6>
  <ol>
    1. Hub
    <ul>
      <li>Hub name</li>
      <li>Left flange diameter</li>
      <li>Right flange diameter</li>
      <li>Left flange to center</li>
      <li>Right flange to center</li>
      <li>Spoke hole diameter</li>
      <li>Hub weight</li>
    </ul> 
  2. Rim
  <ul>
    <li>Rim name</li>
    <li>Rim ERD</li>
    <li>Offset spoke bed(OSB)</li>
    <li>Max rim tension</li>
    <li>Rim weight</li>
  </ul>  
  3. Lacing
  <ul>
    <li>Spoke name</li>
        <li>Number of spokes
          - options are 16/18/20/24/28/32/36</li>
        <li>Lacing pattern
          - options are radial / 1x / 2x / 3x</li>
    </ul>
  </ol>
</div>
  )
}
