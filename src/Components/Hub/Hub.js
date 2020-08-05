import React, {useState} from 'react'

export const Hub = () => {
  const [hub, setHub] = useState({
    hubName: '',
    oLD: '', 
    pCDL: '', 
    pCDR: '',
    cTFL: '',
    cTFR: '',
    hSHD: ''
  })

  const handleChange = (event) => {
    event.preventDefault()
    let name = event.target.name
    let value = event.target.value
    hub[name] = value
    setHub(hub)
  }

  const handleClick = (event) => {
    console.log(event.target)
  }

  return (            
    <div>
      <h3>Hub details</h3>
      <form class="">
        <fieldset id="form--hub">
          <div className="form-row">
            <div className="form-group col-md-7">
              <label class="form-label" for="hubName">Hub Name</label>
              <input 
                  className="form-control"
                  type='text'
                  id='hubName' 
                  name='hubName' 
                  value={hub['hubName']} 
                  onChange={event => handleChange(event)} 
              />
              <p className=""> optional</p>
            </div>
            <div className="form-group col-md-2">
              <label 
                  className="form-label"
              > O.L.D</label>
              <input 
                  className="form-control" 
                  type='text' name='oLD'  value={hub['oLD']} onChange={event => handleChange(event)}
              />     
            </div>
            <div className="form-group col-md-3">
              <label className='form-label' htmlFor="hSHD">Spoke Hole Diameter</label>
              <input className="form-control" type="text" name="hSHD" value={hub['hSHD']} required onChange={event=> {handleChange(event)}} />
            </div>
          </div>
     
              <div className="form-row">
                  <div className="form-group col-md-3">
                  <label  className="form-label" htmlFor="pCDL">P.C.D Left Flange </label>
                  <input className="form-control" type="text" name='pCDL' value={hub['pCDL']} required onChange={event=> {handleChange(event)}} />
                  </div>

                  <div className="form-group col-md-3">
                  <label className="form-label" htmlFor="pCDR">P.C.D Right Flange</label>
                  <input className="form-control" type="text" name='pCDR'value={hub['pCDR']} required onChange={event=> {handleChange(event)}} />
                  </div>
             

              <div className="form-group col-md-3">
                  <label className="form-label" htmlFor="cTFL">Center to Flange Left</label>
                  <input className="form-control" 
                      type='text' 
                      name='cTFL' 
                      value={hub['cTFL']} 
                      required 
                      onChange={event => {handleChange(event)}} />
              </div>

              <div class="form-group col-md-3">
                  <label className='form-label' htmlFor="cTFR">Center to Flange Right</label>
                  <input className="form-control" type="text" name="cTFR" value={hub['cTFR']} required onChange={event=> {handleChange(event)}} />
              </div>
              </div>

          </fieldset>
          <button type="button" className="btn btn-primary">PreV</button>
          <button onClick={handleClick} type="button" className="btn btn-warning">Next</button>
      </form>
    </div>
  )
}
