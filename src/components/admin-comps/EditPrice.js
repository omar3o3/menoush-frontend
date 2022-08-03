import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditPrice({ price, dessertId }) {
  const [priceState, setPriceState] = useState(0);
  const [editState, setEditState] = useState(false);
  const [initialPriceValue, setInitialPriceValue] = useState(price);

  let handleEdit = (e) => {
    setEditState(!editState);

    if (e.target.textContent === "Done Editing" && priceState !== 0) {
      fetch(`/edit-dessert`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: priceState,
          id: dessertId,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => setInitialPriceValue(data.price));
    }
  };

  return (
    <>
      {editState ? (
        <Row className="mt-2">
          <Col>
            <textarea
              className="form-control"
              defaultValue={initialPriceValue}
              onChange={(e) => setPriceState(e.target.value)}
            />
          </Col>
        </Row>
      ) : (
        <Row className="my-2 text-center">
          <Col>
            <span>${initialPriceValue}</span>
          </Col>
        </Row>
      )}
      <Button variant="outline-dark" onClick={handleEdit}>
        {editState ? "Done Editing" : "Edit Price"}
      </Button>
    </>
  );
}

// <ListGroup.Item value={dessertId}>
//   <InputGroup className="mb-3">
//   </InputGroup>
// </ListGroup.Item>
// <ListGroup.Item className="text-center">
// </ListGroup.Item>

export default EditPrice;
