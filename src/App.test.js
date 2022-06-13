import { render, screen } from "@testing-library/react";
import App from "./App";
import Box from "./Box";

test("render a box in <app />", () => {
    let {container} = render(<App/>)

    let box = container.getElementsByClassName("box")
  expect(box);
});

test("header contains text", () => {
  render(<App />);
  let text = screen.getByText(/Awesome app/);
  expect(text);
});

test("Box has value", () => {
    render(<Box text="1"/>)
    let box = screen.getByText("1")
    expect(box)
});
test("multiple boxes in <app/> from data, and they have values",()=>{
    let {container} = render(<App/>)
    let boxes = container.getElementsByClassName("box")
    expect(boxes.length).toBe(5);
    
    for(let box of boxes){
        console.log(box.innerHTML)
    }
    
    
   
   
})

