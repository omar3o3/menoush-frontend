import React, { useState, useEffect } from "react";

import EditEnglishName from "./EditEnglishName";
import EditArabicName from "./EditArabicName";
import EditPrice from "./EditPrice";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AdminEditDessert() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("/desserts")
      .then((resp) => resp.json())
      .then((data) => setDesserts(data));
  }, []);

  console.log(desserts);

  return (
    <div>
      <Row>
        {desserts.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={dessert.preview_image} />
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center">
                  <span>ID: </span>
                  <span>{dessert.id}</span>
                </ListGroup.Item>

                <EditEnglishName
                  englishName={dessert.english_name}
                  dessertId={dessert.id}
                />

                <EditArabicName
                  arabicName={dessert.arabic_name}
                  dessertId={dessert.id}
                />

                <EditPrice price={dessert.price} dessertId={dessert.id} />
              </ListGroup>
              <Button>Delete Dessert</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AdminEditDessert;
