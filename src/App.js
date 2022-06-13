import React from "react";

import Box from "./Box";

const Data = {
  value: [1, 2, 3, 4, 5]
};

function App() {
  return (
    <>
      <h1>Awesome app</h1>
      {Data.value.map((n)=>{
        return <Box text={n}/>
      })}
      
    </>
  );
}

export default App;
