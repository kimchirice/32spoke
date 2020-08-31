import React from 'react';

const Spoke = ({handleChange, spoke}) => {
  return (
    <>
      <div className="form-group">
        <label className="form-label" htmlFor="spokeName">Spoke Name</label>
        <input 
          className="form-control"
          type='text'
          id="spokeName"
          name='spokeName'
          value={spoke.spokeName }
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div className="form-group">
        <label className="col-form-label  col-sm-4" htmlFor="spokeWeight">Spoke Weight(g.)</label>  
        <input 
            className="form-control"
            type='text'
            id='spokeWeight' 
            name='spokeWeight'
            value={spoke.spokeWeight} 
            onChange={handleChange}
            />
      </div>

      {/* <div className="form-group row">
        <label className="col-form-label col-sm-6 ml-0 pl-0 font-weight-bold" htmlFor="numberOfSpokes">Number of Spokes</label>
        <div className="col-sm-6">
          <select 
            className="form-control"
            type='text'
            id='numberOfSpokes' 
            name='numberOfSpokes' 
            onChange={(e)=> handleChange(e.target.value)}
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
            onChange={(e)=> handleChange(e.target.value)}
            
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
            onChange={(e)=> handleChange(e.target.value)}
            
            <option value="0" >ridial</option>
            <option value="1" >x1</option>
            <option value="2" >x2</option>
            <option value="3" selected>x3</option>
            <option value="4">x4</option>
          </select>
        </div> */}
      {/* </div>    */}
    </>
  )
}

export default Spoke;