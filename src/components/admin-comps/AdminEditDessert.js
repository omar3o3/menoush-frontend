import React , {useState} from "react";

import EditEnglishName from "./EditEnglishName";
import EditArabicName from "./EditArabicName";
import EditPrice from "./EditPrice";
import mainImagePlaceHolder from "../../images/image-coming-soon-placeholder.jpg";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AdminEditDessert({ dessert, handleDelete }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <Card style={{ width: "13rem" }} className="rounded border-2 border-dark">
        {dessert.preview_image_url ? (
          <Card.Img
            className="mainImage"
            style={{ backgroundColor: "white" }}
            // className="border-2 homePageCard text-center"
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
        {/* <ListGroup className="list-group-flush"> */}
        <ListGroup.Item className="text-center">
          {/* <Row> */}
          {/* <Col> */}
          <span>ID: </span>
          <span>{dessert.id}</span>
          {/* </Col> */}
          {/* </Row> */}
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
        {/* </ListGroup> */}
        <Button
          className="addCartButton border-1 border-dark sm"
          style={{
            backgroundColor: isHovering ? "#a61111" : "#bc4349",
            // color: isHovering ? "#d8a941" : "black",
            // color: isHovering ? "#d8a941" : "white",
            color: isHovering ? "white" : "black",
            width: "100%",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDelete(dessert.id)}
        >
          Delete Dessert
        </Button>
      </Card>
    </div>
  );
}

export default AdminEditDessert;