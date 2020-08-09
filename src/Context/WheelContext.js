import React, { useState, createContext } from 'react'

const WheelContext = createContext()

const WheelContextProvider = ({children}) => {
  const initialWheelValue = {
    hubName: '',
    rimName: '',
    spokeName: ''
  }

  const [currentStep, setCurrentStep] = useState(1)
  console.log(currentStep)
  const [wheel, setWheel] = useState(initialWheelValue)

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(`name is ${name} while value is ${value}`)
    setWheel({
      ...wheel,
      [name]: value
    })
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
  )
}

export { WheelContext, WheelContextProvider }
