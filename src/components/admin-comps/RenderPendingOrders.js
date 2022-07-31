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
  console.log(order);
  let totalPrice = cartItems
    .map((item) => parseFloat(item.self_total))
    .reduce((partialSum, a) => partialSum + a, 0);

  return (
    <>
      <Container
        className="border border-2 border-dark rounded individalPendingOrderMargin"
        style={{ width: "60%" }}
      >
        <Row style={{ backgroundColor: "#FFCDD2" }} className="fs-3 fw-light">
          <Col className="border-end border-2 border-dark">
            <div>Name: {UserFullName}</div>
          </Col>
          <Col className="border-end border-dark">
            <div>Date Ordered: {}</div>
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
                    <li>
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
            <Button variant="success">Accept</Button>
            <InputGroup style={{ width: "28%" }}>
              <Form.Control
                type="number"
                placeholder="days needed to complete"
              />
            </InputGroup>
            <Button variant="danger">Decline</Button>
          </ButtonGroup>
        </Row>
      </Container>
    </>
  );
}

export default RenderPendingOrders;
