import React from "react";

import EditEnglishName from "./EditEnglishName";
import EditArabicName from "./EditArabicName";
import EditPrice from "./EditPrice";
import mainImagePlaceHolder from "../../images/image-coming-soon-placeholder.jpg";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function AdminEditDessert({ dessert }) {
  return (
    <div>
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
    </div>
  );
}

export default AdminEditDessert;
