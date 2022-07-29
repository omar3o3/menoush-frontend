import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function EditEnglishName({ englishName , dessertId}) {
  const [englishState, setEnglishState] = useState("");
  const [editState, setEditState] = useState(false);
  const [initialEnglishValue, setInitialEnglishValue] = useState(englishName);

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
        <ListGroup.Item value={dessertId}>
          <InputGroup className="mb-3">
            <textarea
              className="form-control"
              defaultValue={initialEnglishValue}
              onChange={(e) => setEnglishState(e.target.value)}
            />
          </InputGroup>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item className="text-center">
          <span>{initialEnglishValue}</span>
        </ListGroup.Item>
      )}
      <Button variant="outline-dark" onClick={handleEdit}>
        {editState ? "Done Editing" : "Edit English Name"}
      </Button>
    </>
  );
}

export default EditEnglishName;
