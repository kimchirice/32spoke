import React from 'react'

const Hub = ({ handleChange, hub, handleBlur }) => {
  const { hubName, hubWeight, spokeHoleDiameter, leftFlangeDiameter, rightFlangeDiameter, leftFlangeToCenter, rightFlangeToCenter } = hub
  return (
    <div className='text-left'>
      <div className='form-group mb-lg-3 '>
        <label htmlFor='hubName' className='form-label mb-0'>
          Hub name
        </label>
        <input
          className='form-control'
          type='text'
          id='hubName'
          name='hubName'
          value={hubName.value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
        { hubName.hasError && <div className=' text-left text-danger'>
          <span className="oi oi-warning" title="icon warning" aria-hidden="true"></span>
          <p>{hubName.error}</p>
        </div> }
      </div>

      <div className='form-group mb-lg-3'>
        <label className='form-label mb-0' htmlFor='hubWeight'>
          Hub weight
        </label>
        <div className='d-flex'>
          <input
            className='form-control'
            type='text'
            id='hubWeight'
            name='hubWeight'
            value={hubWeight.value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className='form-group-append'>
            <span className='input-group-text'> g </span>
          </div>{' '}
        </div>
      </div>
      <div className='form-group mb-lg-3'>
        <label className='form-label mb-0' htmlFor='spokeHoleDiameter'>
          Spoke hole diameter
        </label>
        <div className='d-flex'>
          <input
            className='form-control'
            type='number'
            id='spokeHoleDiameter'
            name='spokeHoleDiameter'
            value={spokeHoleDiameter.value}
            onChange={handleChange}
            onBlur={handleBlur}
            min='1.5'
            max='3.5'
            step='0.1'
          />
          <div className='form-group-append'>
            <span className='input-group-text'>mm</span>
          </div>
        </div>
      </div>

      <div className='form-group mb-lg-3'>
        <label className='form-label mb-0' htmlFor='leftFlangeDiameter'>
          Left Flange diameter
        </label>
        <div className='d-flex'>
          <input
            className='form-control'
            type='text'
            id='leftFlangeDiameter'
            name='leftFlangeDiameter'
            value={leftFlangeDiameter.value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className='form-group-append'>
            <span className='input-group-text'>mm</span>
          </div>
        </div>
      </div>

      <div className='form-group mb-lg-3'>
        <label className='form-label mb-0' htmlFor='rightFlangeDiameter'>
          Right Flange diameter
        </label>
        <div className='d-flex'>
          <input
            className='form-control'
            type='text'
            id='rightFlangeDiameter'
            name='rightFlangeDiameter'
            value={rightFlangeDiameter.value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className='form-group-append'>
            <span className='input-group-text'>mm</span>
          </div>
        </div>
      </div>

      <div className='form-group mb-lg-3'>
        <label className='form-label mb-0' htmlFor='leftFlangeToCenter'>
          Left Flange to Center
        </label>
        <div className='d-flex'>
          <input
            className='form-control'
            type='text'
            id='leftFlangeToCenter'
            name='leftFlangeToCenter'
            value={leftFlangeToCenter.value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className='form-group-append'>
            <span className='input-group-text'>mm</span>
          </div>
        </div>
      </div>
      <div className='form-group mb-lg-3'>
        <label className='form-label mb-0' htmlFor='rightFlangeToCenter'>
          Right Flange to Center
        </label>
        <div className='d-flex'>
          <input
            className='form-control'
            type='text'
            id='rightFlangeToCenter'
            name='rightFlangeToCenter'
            value={rightFlangeToCenter.value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className='form-group-append'>
            <span className='input-group-text'>mm</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hub