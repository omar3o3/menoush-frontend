import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function RenderHistory({ order, cartItems, desserts }) {
  let totalPrice = cartItems
    .map((item) => parseFloat(item.self_total))
    .reduce((partialSum, a) => partialSum + a, 0);

  return (
    <>
      <Container
        className="border border-2 border-dark rounded individalPendingOrderMargin userOrderHistory"
        style={{ width: "60%", backgroundColor: "#f1f1f3" }}
      >
        <Row
          style={{ backgroundColor: "" }}
          className="fs-3 fw-light text-center"
        >
          <Col className=" border-2 border-dark border-bottom">
            <div>Promised within: {order.days_to_complete} days</div>
          </Col>
          <Col className="border-bottom border-2 border-dark ">
            <div>Total: ${totalPrice}</div>
          </Col>
        </Row>

        {/* <Row className="fs-3 fw-light">
          <Col className="border-top border-dark border-bottom text-center">
            Items...
          </Col>
        </Row> */}

        <Row className="">
          <Col className="p-0">
            <ListGroup
              variant="flush"
              style={{
                borderBottomLeftRadius: ".3rem",
                borderBottomRightRadius: ".3rem",
              }}
            >
              <ListGroup.Item style={{ backgroundColor: "#f1f1f3" }}>
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
      <div className="p-4"></div>
    </>
  );
}

export default RenderHistory;
