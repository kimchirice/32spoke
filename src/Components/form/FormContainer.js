import React, {Component} from 'react'
import Hub from './FormHub'
import Rim from './FormRim'
import SpokeNLacing from './FormSpokeNLacing'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentStep: 1,
      wheel: {
        hubName: '',
        rimName: '',
        SpokeName: '',
      },
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickCalculate = this.handleClickCalculate.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      wheel: {
        ...this.state.wheel, 
        name: value,
      }
    });
  }

  handleClickCalculate() {
    
  }
  
  handleClickNext(e) {
    if (this.state.currentStep >= 1 && this.state.currentStep < 3) {
      this.setState( prevState => ({
        currentStep: prevState.currentStep =+ 1,
      })
      )
    }
  }
  handleClickPrev(e) {
    e.preventDefault();
    if (this.state.currentStep >= 2) {
      this.setState( prevState => ({
        currentStep: prevState.currentStep -= 1,
      })
      )
  }

  render() {

    const Steps = () => {
      switch(this.state.currentStep) {
        case 1: 
          return (
            <Hub onChange={this.handleChange} wheel={this.state.wheel} />
          );
        case 2: 
            return(<Rim onChange={this.handleChange} wheel={this.state.wheel} />)
        case 3: 
          return( <SpokeNLacing onChange={this.handleChange} wheel={this.state.wheel}/>)
        default:
          return (
            <Hub/>
          );
      }
    };
    
    
    const Buttons = () => {
      switch (this.state.currentStep) {
        case 1: 
          return (
            <div>
              <div></div>
              <button onClick={this.handleClickNext} type="button" className="btn btn-warning">Next ❯</button>
            </div>
          )
        case 2:
          return (
            <div className="d-flex jc-">
              <button onClick={this.handleClickPrev} type="button" className="btn btn-primary">❮ Previous</button>
              <button onClick={this.handleClickNext} type="button" className="btn btn-warning">Next ❯</button>
            </div>);
        case 3:
          return (
            <div>
              <button onClick={this.handleClickPrev} type="button" className="btn btn-primary">❮ Previous</button>
              <button onClick={this.handleClickCalculate} type="button" className="btn btn-warning">Calculate</button>
            </div>);
        default:
          return (
            <div>
              <button onClick={this.handleClickNext} type="button" className="btn btn-warning">Next ❯</button>
            </div>
          )
      }
    };

    return (
      <div className="d-flex flex-column justify-content-center align-items-start">
        <h4>Step {this.state.currentStep}</h4>
        <Steps />
        <Buttons />
      </div>
    )
  }
}

export default FormContainer;