import React from 'react';
import { render } from '@testing-library/react';
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


