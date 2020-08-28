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
        
           

            

          </fieldset>
        </form>
      </div>
  );
}
