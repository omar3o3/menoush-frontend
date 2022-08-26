import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";

function RenderPendingOrders({
  order,
  cartItems,
  desserts,
  UserFullName,
  checkOutDate,
}) {
  const [dayState, setDayState] = useState();
  const [showState, setShowState] = useState(true);
  // console.log(checkOutDate);

  let totalPrice = cartItems
    .map((item) => parseFloat(item.self_total))
    .reduce((partialSum, a) => partialSum + a, 0);

  let handleAccept = () => {
    if (dayState !== 0 && !isNaN(dayState) && dayState > 0) {
      fetch("/accept-order", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          order_id: order.id,
          days_to_complete: dayState,
        }),
      }).then((response) => {
        if (response.ok) {
          setShowState(false);
        }
      });
    }
  };

  let handleDecline = () => {
    // console.log(order);
    fetch("/decline-order", {
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

  return (
    <>
      {showState ? (
        <Container
          className="border border-2 border-dark rounded individalPendingOrderMargin userOrderHistory"
          style={{
            width: "70%",
          }}
        >
          <Row
            style={{
              borderTopLeftRadius: ".3rem",
              borderTopRightRadius: ".3rem",
              backgroundColor: "#a2929a",
              color: "white",
            }}
            className="fs-3 fw-light text-center"
          >
            <Col className="border-bottom border-2 border-dark">
              <div style={{verticalAlign: "middle"}}>Name: {UserFullName}</div>
            </Col>
            {/* <Col className="border-bottom border-2 border-dark">
              <div>Checked Out: {checkOutDate}</div>
            </Col> */}
          </Row>
          <Row
            style={{
              borderTopLeftRadius: ".3rem",
              borderTopRightRadius: ".3rem",
              backgroundColor: "#a2929a",
              color: "white",
            }}
            className="fs-3 fw-light text-center"
          >
            <Col className="border-bottom border-2 border-dark">
              <div>Checked Out: {checkOutDate}</div>
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
      ) : null}
      {/* <div className="p-4"></div> */}
    </>
  );
}

export default RenderPendingOrders;
