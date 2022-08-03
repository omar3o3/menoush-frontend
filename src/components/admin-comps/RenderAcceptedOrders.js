import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function RenderAcceptedOrders({ order, cartItems, desserts, UserFullName }) {
  const [showState, setShowState] = useState(true);

  let totalPrice = cartItems
    .map((item) => parseFloat(item.self_total))
    .reduce((partialSum, a) => partialSum + a, 0);

  let handleCompleted = () => {
    console.log(order);
    fetch("/complete-order", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        order_id: order.id,
      }),
    }).then((response) => {
      if (response.ok) {
        setShowState(false);
      }
    });
  };

  // console.log(order)

  return (
    <>
      {showState ? (
        <Container
          className="border border-2 border-dark rounded mt-5 userOrderHistory"
          style={{ width: "70%" }}
        >
          <Row
            style={{
              borderTopLeftRadius: ".3rem",
              borderTopRightRadius: ".3rem",
              backgroundColor: "#a2929a",
              color: "white",
            }}
            className="fs-3 fw-light text-center border-bottom border-2 border-dark"
          >
            <Col className="border-end border-2 border-dark">
              <div>Name: {UserFullName}</div>
            </Col>
            {/* <Col className="border-end border-dark">
            <div>Date Ordered: {}</div>
          </Col> */}
            <Col>
              <div>Complete within: {order.days_to_complete} days</div>
            </Col>
          </Row>
          <Row
            style={{ backgroundColor: "#a2929a", color: "white" }}
            className="fs-3 fw-light text-center"
          >
            <Col className="border-end border-bottom border-2 border-dark">
              <div>Email: {order.user_email}</div>
            </Col>
            <Col className="border-bottom border-2 border-dark">
              <div>Total: ${totalPrice}</div>
            </Col>
          </Row>

          {/* <Row className="fs-3 fw-light">
            <Col className="border-top border-dark border-bottom text-center">
              Items...
            </Col>
          </Row> */}

          <Row className="px-0">
            <Col className="px-0">
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

          <Row className="border-top border-dark">
            <Button variant="success" onClick={() => handleCompleted()}>
              Complete Order
            </Button>
          </Row>
        </Container>
      ) : null}
    </>
  );
}

export default RenderAcceptedOrders;
