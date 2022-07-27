import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function EditPrice({price , dessertId}) {
  const [priceState, setPriceState] = useState(0);
  const [editState, setEditState] = useState(false);
  const [initialPriceValue, setInitialPriceValue] = useState(price);

    let handleEdit = (e) => {
      setEditState(!editState);

      if (e.target.textContent === "Done Editing") {
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
        <ListGroup.Item value={dessertId}>
          <InputGroup className="mb-3">
            <textarea
              className="form-control"
              defaultValue={initialPriceValue}
              onChange={(e) => setPriceState(e.target.value)}
            />
          </InputGroup>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item className="text-center">
          <span>{initialPriceValue}</span>
        </ListGroup.Item>
      )}
      <Button variant="outline-dark" onClick={handleEdit}>
        {editState ? "Done Editing" : "Edit Price"}
      </Button>
    </>
  );
}

export default EditPrice