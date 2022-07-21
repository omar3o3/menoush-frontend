import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CardForHomeComp({desserts}) {
    // console.log(desserts)
    // console.log(desserts.map(dessert => dessert.name))
  return (
    <>
    {desserts.map(dessert => (
        // <Card style={{ width: '18rem' }}>
        //      <Card.Img variant="top" src= {dessert.image_url} />
        //      <Card.Body>
        //      </Card.Body>
        //          <ListGroup className="list-group-flush">
        //              <ListGroup.Item>{dessert.english_name}</ListGroup.Item>
        //              <ListGroup.Item>{dessert.arabic_name}</ListGroup.Item>
        //              <ListGroup.Item>{dessert.price}</ListGroup.Item>
        //          </ListGroup>
        //  </Card>


    //         <Card style={{ width: '18rem' }} bg="light">
    //   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item>Cras justo odio</ListGroup.Item>
    //     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    //     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    //   </ListGroup>
    //   <Card.Body>
    //     <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link>
    //   </Card.Body>
    // </Card>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      ))}
    </>
  )
}

export default CardForHomeComp