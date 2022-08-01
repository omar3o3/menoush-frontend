import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";

function RenderPendingOrders({ order, cartItems, desserts, UserFullName }) {
  //   console.log(order);

  const [dayState, setDayState] = useState();

  let totalPrice = cartItems
    .map((item) => parseFloat(item.self_total))
    .reduce((partialSum, a) => partialSum + a, 0);

  let handleAccept = () => {
    // console.log(order.id);
    if (dayState !== 0 && !isNaN(dayState) && dayState > 0) {
        fetch("/accept-order", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            // order: order,
            order_id: order.id,
            days_to_complete: dayState,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
    }
  };

  let handleDecline = () => {
    console.log(order);
  };

  return (
    <>
      <Container
        className="border border-2 border-dark rounded individalPendingOrderMargin"
        style={{ width: "70%" }}
      >
        <Row style={{ backgroundColor: "#FFCDD2" }} className="fs-3 fw-light">
          <Col className="border-end border-2 border-dark">
            <div>Name: {UserFullName}</div>
          </Col>
          {/* <Col className="border-end border-dark">
            <div>Date Ordered: {}</div>
          </Col> */}
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

        <Row className="border-top border-dark">
          <ButtonGroup className="p-0">
            <Button variant="success" onClick={() => handleAccept()}>
              Accept
            </Button>
            <InputGroup style={{ width: "33%" }}>
              <Form.Control
                type="number"
                placeholder="days needed to complete"
                onChange={(e) => setDayState(parseInt(e.target.value))}
              />
            </InputGroup>
            <Button variant="danger" onClick={() => handleDecline()}>
              Decline
            </Button>
          </ButtonGroup>
        </Row>
      </Container>
    </>
  );
}

export default RenderPendingOrders;
