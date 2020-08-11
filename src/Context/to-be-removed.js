import React, { useState, createContext } from 'react'

const WheelContext = createContext()



const WheelContextProvider = ({children}) => {
  const initialWheelValue = {}

  const [currentStep, setCurrentStep] = useState(1)
  const [wheel, setWheel] = useState(initialWheelValue)

  function handleChange(event) {
    const { name, value } = event.target;
    wheel[name] = value;
    setWheel(wheel);
  }

  function handleClickPrev(e) {
    e.preventDefault();
    if (currentStep >= 2) {
      setCurrentStep(prev => prev -= 1)
    }
    return currentStep
  }

  function handleClickNext(e) {
    e.preventDefault();
    if (currentStep >= 1 && currentStep < 3) {
      setCurrentStep(prev => prev += 1)
    }
    return currentStep
  }

  function handleClickCalculate(e) {
    e.preventDefault();
    alert(`Yeah, got all the data`)
  }

  return (
    <WheelContext.Provider 
      value={{currentStep, wheel, handleChange, 
        handleClickPrev, 
        handleClickNext, 
        handleClickCalculate}}
    >
      {children}
    </WheelContext.Provider>
  );
}

export { WheelContext, WheelContextProvider }
