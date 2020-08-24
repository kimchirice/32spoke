import React from 'react'

export default function SpokeNLacing(props) {
  return (            
      <div>
        <h3>Spoke & Lacing</h3>
        <form >
          <fieldset id="form--spokeNLacing">
           
              <div className="form-group row">
                <label className="col-form-label  col-sm-4" htmlFor="spokeName">Spoke Name</label>
                <div className="col-md-8">
                <input 
          ß          className="form-control"
                    type='text'
                    id='spokeName' 
                    name='spokeName' 
                    value={props.spokeName} 
                    onChange={props.handleChange}
                    autoFocus 
                />
                  </div>
              </div>
        
           

            
            {/* <div className="form-group row">
              <label className="col-form-label  col-sm-4" htmlFor="spokeWeight">Spoke Weight(g.)</label>
              <div className="col-sm-8">  
                <input 
                    className="form-control"
                    type='text'
                    id='spokeWeight' 
                    name='spokeWeight' 
                    value={wheel.spokeWeight} 
                    onChange={handleChange}
                />
              </div>
            </div>
           
            <div className="form-group row">
              <label className="col-form-label col-sm-6 ml-0 pl-0 font-weight-bold" htmlFor="numberOfSpokes">Number of Spokes</label>
              <div className="col-sm-6">
                <select 
                  className="form-control"
                  type='text'
                  id='numberOfSpokes' 
                  name='numberOfSpokes' 
                  value={wheel.numberOfSpokes} 
                  onChange={handleChange}
                >
                  <option value="16">16</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                  <option value="24">24</option>
                  <option value="28">28</option>
                  <option value="32" selected>32</option>
                </select>
              </div> 
            </div>
        
              <div className="form-group row">
                <label className="col-form-label col-sm-6 ml-0 pl-0 font-weight-bold" htmlFor="lacingPatternLeft">Lacing Pattern Left</label>
                <div className="col-sm-6">  
                  <select 
                    className="form-control"
                    type='text'
                    id='lacingPatternLeft' 
                    name='lacingPatternLeft' 
                    value={wheel.lacingPatternLeft} 
                    onChange={handleChange} >
                    
                    <option value="0">ridial</option>
                    <option value="1">x1</option>
                    <option value="2">x2</option>
                    <option value="3" selected>x3</option>
                    <option value="4">x4</option>
                  </select>    
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-sm-6 ml-0 pl-0 font-weight-bold" htmlFor="numberOfSpokes">Lacing pattern right</label>
                <div className="col-sm-6">
                  <select 
                    className="form-control"
                    type='text'
                    id='lacingPatternRight' 
                    name='lacingPatternRight' 
                    value={wheel.lacingPatternRight} 
                    onChange={handleChange} >
                    
                    <option value="0">ridial</option>
                    <option value="1">x1</option>
                    <option value="2">x2</option>
                    <option value="3" selected>x3</option>
                    <option value="4">x4</option>
                  </select>
                </div>   
              </div> */}
          </fieldset>
        </form>
      </div>
  );
}
