import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function RenderHistory({ order , cartItems , desserts }) {

      let totalPrice = cartItems
        .map((item) => parseFloat(item.self_total))
        .reduce((partialSum, a) => partialSum + a, 0);

  return (
    <div>
      <Container
        className="border border-2 border-dark rounded individalPendingOrderMargin"
        style={{ width: "60%" }}
      >
        <Row
          style={{ backgroundColor: "#FFCDD2" }}
          className="fs-3 fw-light text-center"
        >
          <Col className="border-end border-2 border-dark">
            <div>Promised within: {order.days_to_complete} days</div>
          </Col>
          <Col className="">
            <div>Total: ${totalPrice}</div>
          </Col>
        </Row>

        <Row className="fs-3 fw-light">
          <Col className="border-top border-dark border-bottom text-center">
            Items...
          </Col>
        </Row>

        <Row>
          <Col className="">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <p className="lead">
                  {desserts.map((dessert) => (
                    <li key={dessert.id}>
                      <span className="fw-bold">
                        {
                          cartItems.find(
                            (item) => item.dessert_id === dessert.id
                          ).quantity
                        }
                        &nbsp;&nbsp;
                      </span>
                      {dessert.english_name}
                      &nbsp;&nbsp; / &nbsp;&nbsp;
                      {dessert.arabic_name}
                    </li>
                  ))}
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RenderHistory;
