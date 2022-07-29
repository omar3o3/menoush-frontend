import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

function RenderCartItems({ desserts }) {

    let handleRemove = () => {
        console.log('hi')
    }

  return (
    <>
      <ListGroup variant="flush " className="my-5 mx-3">
        {desserts.map((dessert) => (
          <ListGroup.Item key={dessert.id}>
            <p className="lead">
              {dessert.english_name} &nbsp; / &nbsp; {dessert.arabic_name}
              <Badge bg="danger" pill className="cartBadge" onClick={handleRemove}>
                X
              </Badge>
            </p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default RenderCartItems;
