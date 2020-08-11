import React, {useState} from 'react'
import Hub from '../Components/Hub/Hub'
import Rim from '../Components/Rim/Rim'
import SpokeNLacing from '../Components/SpokeNLacing/SpokeNLacing'


const Wheel = () => {
  // function currentStep() {},
  const [currentStep, setCurrentStep] = useState(1)
  
  const initialWheelValue = {}
  const [wheel, setWheel]=useState(initialWheelValue)

  const handleChange = (event) => {
    const { name, value } = event.target;
    wheel[name] = value;
    setWheel(wheel);
  }

  const handleClickCalculate = (e) => {
    e.preventDefault();
    alert(`Yeah, got all the data`)
  }
  const handleClickPrev= (e) => {
    e.preventDefault();
    if (currentStep >= 2) {
      setCurrentStep(prev => prev -= 1)
    }
    return currentStep
  }

  const handleClickNext = (e) => {
    e.preventDefault();
    if (currentStep >= 1 && currentStep < 3) {
      setCurrentStep(prev => prev += 1)
    }
    return currentStep
  }

  const Steps = () => {
    switch(currentStep) {
      case 1: 
        return (
          <Hub wheel={wheel} onChange={handleChange}/>
        );
      case 2: 
          return(<Rim wheel={wheel} onChange={handleChange}/>)
      case 3: 
        return( <SpokeNLacing wheel={wheel} onChange={handleChange}/>)
      default:
        return (
          <Hub onChange={handleChange}/>
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
          <div className="d-flex jc-">
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
    <div className="d-flex flex-column justify-content-center align-items-start">
      <h4>Step {currentStep}</h4>
      <Steps />
      <Buttons />
    </div>
  )
}

export default Wheel