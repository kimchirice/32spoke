import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe(' testing DOM elements', () => {
  
  it('renders Home link in the DOM', () => {
    const { getByText } = render(<App />);
    const linkElementHome = getByText("Home" );
    expect(linkElementHome).toBeInTheDocument();
  });
  
  it('renders About link', () => {
    const { getByText } = render(<App />);
    const linkElementAbout = getByText("About" );
    expect(linkElementAbout).toBeInTheDocument();
  });

 
  
  it('Input field named "Hub name"', ()=> {
    const { getByText } = render(<App />);
    const InputFieldHubName = getByText("Hub name");
    expect(InputFieldHubName).toBeInTheDocument();
  });

  it('Input field should NOT be named "Hub Name"(All Capital)', ()=> {
    const { queryByText } = render(<App />);
    const InputFieldHubNameAllCapital = queryByText("Hub Name");
    expect(InputFieldHubNameAllCapital).toBeNull();
  });

  it('Input field should not be named "HUB NAME"(uppercase)', ()=> {
    const { queryByText } = render(<App />);
    const InputFieldHubNameUppercase = queryByText("HUB NAME");
    expect(InputFieldHubNameUppercase).toBeNull();
  });

  it('Input field should not be named "hub name"(lowercase)', ()=> {
    const { queryByText } = render(<App />);
    const InputFieldHubNameLowercase = queryByText("hub name");
    expect(InputFieldHubNameLowercase).toBeNull();
  });
  
 
  
  it('Input field named Hub Weight', ()=> {
    const { getByText } = render(<App />);
    const InputFieldHubWeight = getByText("Hub weight");
    expect(InputFieldHubWeight).toBeInTheDocument();
  });
})


it('navigation role is rendered', () => {
  const { getByRole } = render(<App />);
  getByRole('navigation');
})

it('render label "Hub weight"', () => {
  const { getByLabelText } = render(<App />);
  const labelTextHubName = getByLabelText("Hub weight");
  expect(labelTextHubName).toBeInTheDocument();
})

it('render an input label of "Hub name"', () => {
  const { getByLabelText } = render(<App />);
  const labelTextHubName = getByLabelText("Hub name");
  expect(labelTextHubName).toBeInTheDocument();
})

describe(' testing input field in Hub component', () => {
  const setup = () => {
    const utils = render(<App />)
    const inputHubName = utils.getByLabelText('Hub name')
    return {
      inputHubName,
      ...utils
    } 
  }
  
  
  test('renders input lable of hubName to bitex in the DOM', () => {
    const {  inputHubName  } = setup();
    fireEvent.change(inputHubName, {target: {value: 'bitex raf12'} })
    expect(inputHubName.value).toBe('bitex raf12')
  });
  
  test('renders input lable of hubName to Shimano in the DOM', () => {
    const {  inputHubName  } = setup();
    fireEvent.change(inputHubName, {target: {value: 'Shimano 6600'} })
 
    expect(inputHubName.value).toBe('Shimano 6600')
  });
  

});


