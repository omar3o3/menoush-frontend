import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditArabicName({ arabicName, dessertId }) {
  const [arabicState, setArabicState] = useState("");
  const [editState, setEditState] = useState(false);
  const [initialArabicValue, setInitialArabicValue] = useState(arabicName);

  let handleEdit = (e) => {
    setEditState(!editState);

    if (e.target.textContent === "Done Editing" && arabicState !== "") {
      fetch(`/edit-dessert`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          arabic_name: arabicState,
          id: dessertId,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => setInitialArabicValue(data.arabic_name));
    }
  };

  return (
    <>
      {editState ? (
        <Row>
          <Col>
            <textarea
              className="form-control"
              defaultValue={initialArabicValue}
              onChange={(e) => setArabicState(e.target.value)}
            />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <span>{initialArabicValue}</span>
          </Col>
        </Row>
      )}
      <Button variant="outline-dark" onClick={handleEdit}>
        {editState ? "Done Editing" : "Edit Arabic Name"}
      </Button>
    </>
  );
}

/*<ListGroup.Item value={dessertId}>*/
/* <InputGroup className="mb-3"> */
/* </InputGroup> */
/* </ListGroup.Item> */
// <ListGroup.Item className="text-center"></ListGroup.Item>;

export default EditArabicName;
