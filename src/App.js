import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";

let Data = {
  val: [10, 20, 30, 40, 50],
  val1: [10, 20, 30, 40, 50],
};
function dataShuffle() {
  for (let i in Data.val) {
    let n = Math.random();
    Data.val1[i] = ~~(Data.val[i] * n);
  }
}
console.log(
  "000000".replace(/0/g, () => {return (~~(Math.random() * 16)).toString(16);})
);

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let interval;
    const updateCounter = () => {
      setCounter((currentValue) => currentValue + 1);
    };
    interval = setInterval(() => {
      updateCounter();
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  dataShuffle();
  const createBadge = (n) => {
    return <Col md="1">{n}</Col>;
  };

  return (
    <Col>
      <Row className="App">
        {Data.val1.map((n) => {
          return createBadge(n);
        })}
      </Row>
    </Col>
  );
}

export default App;
