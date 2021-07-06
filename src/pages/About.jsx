import React from 'react'

export default function About() {
  return (
    <div className=' d-felx text-left '>
      <div className=''>
        <h3>
					32spoke helps wheelbuilder to calculate spoke length for the new build
        </h3>
      </div>
      <h3>wheel variables</h3>
      <div className='card'>
        <div className='card-title'>1. Hub</div>
        <ul className=''>
          <li className=''>Hub name</li>
          <li className=''>Left flange diameter</li>
          <li className=''>Right flange diameter</li>
          <li className=''>Left flange to center</li>
          <li className=''>Right flange to center</li>
          <li className=''>Spoke hole diameter</li>
          <li className=''>Hub weight</li>
        </ul>
      </div>

      <div className='card bg-info'>
        <div className='card-title'>2. Rim</div>
        <ul className=''>
          <li>Rim name</li>
          <li>Rim ERD</li>
          <li>Offset spoke bed(OSB)</li>
          <li>Max rim tension</li>
          <li>Rim weight</li>
        </ul>
      </div>
      <div className='card'>
        <div className='card-title'>3. Spoke and lacing</div>
        <ul>
          <li>Spoke name</li>
          <li>Spoke weight</li>
          <li>Number of spokes - options are 16/18/20/24/28/32/36</li>
          <li>Lacing pattern - options are radial / 1x / 2x / 3x</li>
        </ul>
      </div>
    </div>
  )
}