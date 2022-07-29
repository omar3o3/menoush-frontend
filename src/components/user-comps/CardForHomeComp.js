import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import mainImagePlaceHolder from "../../images/image-coming-soon-placeholder.jpg";

function CardForHomeComp({dessert , user}){

  let handleClick = () => {
    // user = 
    console.log(user)
  }

  return (
    <>
      <Card style={{ width: "12rem" }}>
        {dessert.preview_image_url ? (
          <Card.Img
            className="mainImage"
            variant="top"
            src={dessert.preview_image_url}
          />
        ) : (
          <Card.Img
            className="mainImage"
            variant="top"
            src={mainImagePlaceHolder}
          />
        )}
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{dessert.english_name}</ListGroup.Item>
          <ListGroup.Item>{dessert.arabic_name}</ListGroup.Item>
          <ListGroup.Item>{dessert.price}</ListGroup.Item>
        </ListGroup>
        <Button onClick={handleClick}>Add to Cart</Button>
      </Card>
    </>
  );
}

export default CardForHomeComp;
