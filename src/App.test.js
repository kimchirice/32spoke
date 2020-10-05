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
    
  test('Adding input text of hubName to bitex in the form', () => {
    const { getByLabelText } = render(<App />)
    const inputHubNameTest = getByLabelText("Hub name")
    fireEvent.change(inputHubNameTest, {target: {value: 'bitex raf12'} })
    expect(inputHubNameTest.value).toBe('bitex raf12')
  });
  
  test('Adding input text of hubWeight to 100 in the form', () => {
    const { getByLabelText } = render(<App />)
    const  inputHubWeight  = getByLabelText("Hub weight")
    fireEvent.change(inputHubWeight, {target: {value: '100'} })
    expect(inputHubWeight.value).toBe('100')
  });

  test('Adding input text of spoke hole diameter to 2.5 in the form', () => {
    const { getByLabelText } = render(<App />)
    const  inputHubSpokeHoleDiameter  = getByLabelText("Spoke hole diameter")
    fireEvent.change(inputHubSpokeHoleDiameter, {target: {value: '2.5'} })
    expect(inputHubSpokeHoleDiameter.value).toBe('2.5')
  });

  test('Adding input text of left flange diameter to  in the form', () => {
    const { getByLabelText } = render(<App />)
    const  inputHubSpokeHoleDiameter  = getByLabelText("Spoke hole diameter")
    fireEvent.change(inputHubSpokeHoleDiameter, {target: {value: '2.5'} })
    expect(inputHubSpokeHoleDiameter.value).toBe('2.5')
  });



  

});


