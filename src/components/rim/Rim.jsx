import React from 'react'

function Rim({ handleChange, rim }) {
  const { rimName, rimWeight, rimERD, offsetSpokeBed, maxRimTension } = rim
  return (
    <div className='text-left'>
      <div className='form-group'>
        <label htmlFor='rimName' className='form-label'>
					Rim Name
        </label>
        <input
          className='form-control'
          type='text'
          id='rimName'
          name='rimName'
          value={rimName.value}
          onChange={handleChange}
          autoFocus
        />
      </div>

      <div className='form-group '>
        <label className='form-label' htmlFor='rimWeight'>
					Rim Weight
        </label>
        <div className='d-flex'>
          <input
            className='form-control'
            type='text'
            id='rimWeight'
            name='rimWeight'
            value={rimWeight.value}
            onChange={handleChange}
          />
          <div className='form-group-append'>
            <span className='input-group-text'>g</span>
          </div>
        </div>
      </div>

      <div className='form-group '>
        <label className='form-label' htmlFor='rimERD'>
					Rim E.R.D
        </label>
        <div className='d-flex'>
          <input
            className='form-control'
            type='text'
            id='rimERD'
            name='rimERD'
            value={rimERD.value}
            onChange={handleChange}
          />
          <div className='form-group-append'>
            <span className='input-group-text'>mm</span>
          </div>
        </div>
      </div>

      <div className='form-group '>
        <label className='form-label' htmlFor='offsetSpokeBed'>
					Offset Spoke Bed(OSB)
        </label>
        <div className='d-flex'>
          <input
            className='form-control'
            type='text'
            id='offsetSpokeBed'
            name='offsetSpokeBed'
            value={offsetSpokeBed.value}
            onChange={handleChange}
          />
          <div className='form-group-append'>
            <span className='input-group-text'>mm</span>
          </div>
        </div>
      </div>
      <div className='form-group '>
        <label className='form-label' htmlFor='maxRimTension'>
					Max Rim Tension
        </label>
        <div className='d-flex'>
          <input
            className='form-control'
            type='text'
            id='maxRimTension'
            name='maxRimTension'
            value={maxRimTension.value}
            onChange={handleChange}
          />
          <div className='form-group-append'>
            <span className='input-group-text'>kgF</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rim