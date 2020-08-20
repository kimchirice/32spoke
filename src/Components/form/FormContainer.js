import React, {Component} from 'react'
import Hub from '../Components/Hub/Hub'
import Rim from '../Components/Rim/Rim'
import SpokeNLacing from '../Components/SpokeNLacing/SpokeNLacing'

class Wheel extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentStep: 1,
      wheel: {},
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickCalculate = this.handleClickCalculate.bind(this);
  }

  handleChange(event){
    const { name, value } = event.target;
    this.setState(wheel);
  }

  handleClickCalculate() {
    
  }
  
  handleClickNext(e) {
    if (this.state.currentStep >= 1 && this.state.currentStep < 3) {
      this.setState(prevState => prevState.currentStep += 1)
    }
  }
  handleClickPrev(e) {
    e.preventDefault();
    if (this.state.currentStep >= 2) {
      this.setState(prev => prev.currentStep -= 1)
    }
  }


  Steps() {
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
  
  
  Buttons= () => {
    switch (currentStep) {
      case 1: 
        return(
          <div>
            <div></div>
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
  
  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-start">
        <h4>Step {currentStep}</h4>
        <Steps />
        <Buttons />
      </div>
    )
  }
}

export default Wheel