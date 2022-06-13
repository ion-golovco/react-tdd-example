import { Col, Row } from "reactstrap";

function dataShuffle() {
  for (let i in Data.val) {
    let n = Math.random();
    Data.val1[i] = ~~(Data.val[i] * n);
  }
}

console.log(
  "000000".replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  })
);

function App() {
  const createBadge = (n) => {
    return <Col md="1">{n}</Col>;
  };
  dataShuffle();
  return (
    <Col>
      Some weird application.js
      <Row className="App">
        {Data.val1.map((n) => {
          return <Badge text={n}></Badge>;
        })}
      </Row>
    </Col>
  );
}

export default App;
