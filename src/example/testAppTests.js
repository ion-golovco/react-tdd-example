import { getByTestId, render, screen } from "@testing-library/react";
import App from "./App";

import { mockFunction } from "";


it(
  "does something",() => {

  }
)

test("renders App", () => {
  let app = render(<App />);

  expect(app).toBeInTheDocument();
  expect(app).toEqual();
  expect(app).toContainHTML();

  expect(1).toBe(1)

  let numbers = /\d+/g

  expect(numbers).toBeInTheDocument()

  expect().not.toBe(a)
  
  expect().toBe(!a)

});

test("checks for white space", () => {
  render(<App />);
  const whiteSpace = screen.getByText(/ /g);
  expect(whiteSpace);
});

test("checks header", () => {
  render(<App />);
  const header = screen.getByText(/Some weird application.js/);
  expect(header);
});

test("checks badge is inside app", () => {
  render(<App />);
  let badge = screen.getByTestId('badge')

  expect(badge.textContent).toBe(1)
});
