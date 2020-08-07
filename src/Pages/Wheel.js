import React, {useContext} from 'react'
import Hub from '../Components/Hub/Hub'
import Rim from '../Components/Rim/Rim'
import SpokeNLacing from '../Components/SpokeNLacing/SpokeNLacing'

import {WheelContext} from '../Context/WheelContext'

const Wheel = () => {
  
  const {currentStep, handleClickPrev, handleClickNext, handleClickCalculate } = useContext(WheelContext)

  const Steps = () => {
    switch(currentStep) {
      case 1: 
        return (
          <Hub/>
        );
      case 2: 
          return(<Rim />)
      case 3: 
        return( <SpokeNLacing />)
      default:
        return (
          <Hub/>
        );
    }
  }
  
  
  const Buttons= () => {
    switch (currentStep) {
      case 1: 
        return(
          <div>
            <button onClick={handleClickNext} type="button" className="btn btn-warning">Next ❯</button>
          </div>
        )
      case 2:
        return(
          <div>
            <button onClick={handleClickPrev} type="button" className="btn btn-primary">❮ Previous</button>
            <button onClick={handleClickNext} type="button" className="btn btn-warning">Next ❯</button>
          </div>);
      case 3:
        return(
          <div>
            <button onClick={handleClickPrev} type="button" className="btn btn-primary">❮ Previous</button>
            <button onClick={handleClickCalculate} type="button" className="btn btn-warning">Calculate</button>
          </div>);
      default:
        return(
          <div>
            <button onClick={handleClickNext} type="button" className="btn btn-warning">Next ❯</button>
          </div>
        )
    }
  }
  
  
  return (
    <div className="d-flex jc-center">
      <h4>Step {currentStep}</h4>
      <Steps />
      <>
      <Buttons /></>
    </div>
  )
}

export default Wheel