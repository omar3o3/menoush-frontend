import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function EditArabicName({ arabicName, dessertId }) {
  const [arabicState, setArabicState] = useState("");
  const [editState, setEditState] = useState(false);
  const [initialArabicValue, setInitialEnglishValue] = useState(arabicName);

  let handleEdit = (e) => {

    setEditState(!editState);

    if (e.target.textContent === "Done Editing") {
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
        .then((data) => setInitialEnglishValue(data.arabic_name));
    }
  };

  return (
    <>
      {editState ? (
        <ListGroup.Item value={dessertId}>
          <InputGroup className="mb-3">
            <textarea
              className="form-control"
              defaultValue={initialArabicValue}
              onChange={(e) => setArabicState(e.target.value)}
            />
          </InputGroup>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item className="text-center">
          <span>{initialArabicValue}</span>
        </ListGroup.Item>
      )}
      <Button variant="outline-dark" onClick={handleEdit}>
        {editState ? "Done Editing" : "Edit Arabic Name"}
      </Button>
    </>
  );
}

export default EditArabicName;
