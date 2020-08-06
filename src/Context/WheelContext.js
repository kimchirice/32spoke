import React, { Children } from 'react'
import { createContext } from 'react'

export const WheelContext = createContext()

function WheelContextProvider({children}) {
  const initialWheelValue = {
    hubName: '',
    rimName: '',
    spokeName: ''
  }

  const [currentStep, setCurrentStep] = useState(1)
  const [wheel, setWheel] = useState(initialWheelValue)

  function handleChange(e) {
    const { name, value } = e.target;
    setWheel({
      ..wheel,
      [name]: value
    })
  }

  return (
    <WheelContextProvider value={{currentStep, wheel, handleChange}}>
      {children}
    </WheelContextProvider>
  )
}

export default WheelContext
