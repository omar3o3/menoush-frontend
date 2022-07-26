import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditEnglishName({ englishName, dessertId }) {
  const [englishState, setEnglishState] = useState("");
  const [editState, setEditState] = useState(false);
  const [initialEnglishValue, setInitialEnglishValue] = useState(englishName);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  let handleEdit = (e) => {
    setEditState(!editState);

    if (e.target.textContent === "Done Editing" && englishState !== "") {
      fetch(`/edit-dessert`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          english_name: englishState,
          id: dessertId,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => setInitialEnglishValue(data.english_name));
    }
  };

  return (
    <>
      {editState ? (
        // <ListGroup.Item value={dessertId}>
        // <InputGroup className="mb-3">
        <Row className="mt-2">
          <Col>
            <textarea
              className="form-control"
              defaultValue={initialEnglishValue}
              onChange={(e) => setEnglishState(e.target.value)}
            />
          </Col>
        </Row>
      ) : (
        // </InputGroup>
        // </ListGroup.Item>
        // <ListGroup.Item className="text-center">
        <Row className="my-2 text-center">
          <Col className="px-3">
            <span>{initialEnglishValue}</span>
          </Col>
        </Row>
      )}
      {/* </ListGroup.Item> */}
      <Button
        variant="outline-dark"
        onClick={handleEdit}
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
      >
        {editState ? "Done Editing" : "Edit English Name"}
      </Button>
    </>
  );
}

export default EditEnglishName;
