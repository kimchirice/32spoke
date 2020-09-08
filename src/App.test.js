import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Home link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Home" );
  expect(linkElement).toBeInTheDocument();
});

test('renders About link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("About" );
  expect(linkElement).toBeInTheDocument();
});

test('Input field named Hub Name', ()=> {
  const { getByText } = render(<App />);
  const InputFieldHubName = getByText("Hub Name");
  expect(InputFieldHubName).toBeInTheDocument();
});

test('Input field named Hub Weight', ()=> {
  const { getByText } = render(<App />);
  const InputFieldHubWeight = getByText("Hub weight(g)");
  expect(InputFieldHubWeight).toBeInTheDocument();
});

