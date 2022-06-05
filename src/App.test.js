import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  let app = render(<App />);
  expect(app);
});

test('checks for white space', () => {
  render(<App />);
  const whiteSpace = screen.getByText(/ /g);
  expect(whiteSpace);
});

test('checks header', () => {
  render(<App />);
  const header = screen.getByText(/Some weird application.js/);
  expect(header);
});

test('looks for numbers', () => {
  render(<App />);
  const numbers = screen.getAllByText(/\d+/i);
  console.log(numbers[0])
  expect(numbers==0);
});