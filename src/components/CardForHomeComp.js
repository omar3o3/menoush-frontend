import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function CardForHomeComp({
  cookies,
  qatayefs,
  platters,
  kunafas,
  cakes,
  desserts,
}) {
  // console.log(cookies)
  console.log(desserts)
  // console.log(desserts.image)
  // console.log(qatayefs)

  return (
    <>
      {/* <h1 className="text-center">Menu</h1>
      <h3>Cookies...</h3>
      <Row>
        {desserts.map((dessert) => (
          <Col lg={true} key={dessert.id}>
            <Card style={{ width: "13rem" }}>
              <Card.Img variant="top" src={dessert.image_url} />
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{dessert.english_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.arabic_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.price}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row> */}

      {/* <h1 className="text-center">Menu</h1>
      <h3>Cookies...</h3>
      <Row>
        {cookies.map((dessert) => (
          <Col lg={true} key={dessert.id}>
            <Card style={{ width: "13rem" }}>
              <Card.Img variant="top" src={dessert.image_url} />
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{dessert.english_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.arabic_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.price}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>

      <h3>Qatayef...</h3>
      <Row>
        {qatayefs.map((dessert) => (
          <Col lg={true} key={dessert.id}>
            <Card style={{ width: "13rem" }}>
              <Card.Img variant="top" src={dessert.image_url} />
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{dessert.english_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.arabic_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.price}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>

      <h3>Platters...</h3>
      <Row>
        {platters.map((dessert) => (
          <Col lg={true} key={dessert.id}>
            <Card style={{ width: "13rem" }}>
              <Card.Img variant="top" src={dessert.image_url} />
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{dessert.english_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.arabic_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.price}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>

      <h3>Kunafas...</h3>
      <Row>
        {kunafas.map((dessert) => (
          <Col lg={true} key={dessert.id}>
            <Card style={{ width: "13rem" }}>
              <Card.Img variant="top" src={dessert.image_url} />
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{dessert.english_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.arabic_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.price}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>

      <h3>Cakes...</h3>
      <Row>
        {cakes.map((dessert) => (
          <Col lg={true} key={dessert.id}>
            <Card style={{ width: "13rem" }}>
              <Card.Img variant="top" src={dessert.image_url} />
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{dessert.english_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.arabic_name}</ListGroup.Item>
                <ListGroup.Item>{dessert.price}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row> */}
    </>
  );
}

export default CardForHomeComp