import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hub Name input', () => {
  const { getByText } = render(<App />);
  const inputElement = getByText(/Hub name/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders hub weight input', () => {
  const { getByText } = render(<App />);
  const inputElement = getByText(/Hub weight/i);
  expect(inputElement).toBeInTheDocument();
});