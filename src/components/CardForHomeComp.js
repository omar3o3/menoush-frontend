import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardForHomeComp({desserts}) {
  return (
    <Row>
    {desserts.map(dessert => (
      <Col lg={true} key={dessert.id}>
        <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src= {dessert.image_url} />
             <Card.Body>
             </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroup.Item>{dessert.english_name}</ListGroup.Item>
                     <ListGroup.Item>{dessert.arabic_name}</ListGroup.Item>
                     <ListGroup.Item>{dessert.price}</ListGroup.Item>
                 </ListGroup>
         </Card>
         </Col>
      ))}
    </Row>
  )
}

export default CardForHomeComp