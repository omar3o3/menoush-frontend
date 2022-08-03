import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import mainImagePlaceHolder from "../../images/image-coming-soon-placeholder.jpg";

function CardForHomeComp({ dessert, user }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  let handleClick = () => {
    fetch("/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        dessert_id: dessert.id,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Card
        style={{ width: "13rem", backgroundColor: "white" }}
        className="border-2 homePageCard text-center"
      >
        {dessert.preview_image_url ? (
          <Card.Img
            className="mainImage"
            variant="top"
            src={dessert.preview_image_url}
          />
        ) : (
          <Card.Img
            className="mainImage rounded-circle"
            variant="top"
            src={mainImagePlaceHolder}
          />
        )}
        <Row>
          <Col className="px-3 my-1">{dessert.english_name}</Col>
        </Row>
        <Row>
          <Col className="px-3 my-1">{dessert.arabic_name}</Col>
        </Row>
        <Row>
          <Col className="pe-0">Price: ${dessert.price}</Col>
          <Col className="ps-0">
            <Button
              onClick={handleClick}
              className="addCartButton border-1 border-dark sm"
              style={{
                backgroundColor: isHovering ? "#1d1a0c" : "white",
                // color: isHovering ? "#d8a941" : "black",
                // color: isHovering ? "#d8a941" : "white",
                color: isHovering ? "white" : "black",
                width: "100%",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              size="sm"
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
        {/* <ListGroup className="list-group-flush" style={{}}>
          <ListGroup.Item>{dessert.english_name}</ListGroup.Item>
          <ListGroup.Item>{dessert.arabic_name}</ListGroup.Item>
          <ListGroup.Item>{dessert.price}</ListGroup.Item>
        </ListGroup> */}
        {/* <Button
          onClick={handleClick}
          className="addCartButton border-0"
          style={{
            backgroundColor: isHovering ? "#1d1a0c" : "#654813",
            color: "white",
            // color: isHovering ? "#d8a941" : "white",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Add to Cart
        </Button> */}
      </Card>
    </div>
  );
}

export default CardForHomeComp;
