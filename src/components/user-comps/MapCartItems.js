import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function MapCartItems({
  dessert,
  liveItemsAss,
  handleRemove,
  setLiveItemAss,
  setLiveTotal,
}) {
  const [quantityState, setQuantityState] = useState(0);
  const [editState, setEditState] = useState(false);
  const [correctItemAssState, setCorrectItemAssState] = useState(
    liveItemsAss.find((item) => item.dessert_id === dessert.id)
  );

  let handleEdit = (e, dessert) => {
    setEditState(!editState);
    let updatedItemAss = liveItemsAss.filter(
      (item) => item.id !== correctItemAssState.id
    );
    // console.log(updatedItemAss);
    let currentItem = correctItemAssState;

    if (
      e.target.textContent === "Done Editing" &&
      quantityState !== 0 &&
      quantityState > 0
    ) {
      fetch("/update-item-quantity", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: parseInt(quantityState),
          cart_item_id: correctItemAssState.id,
        }),
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => {
            console.log(data)

            currentItem = data[0];
            currentItem.self_total = data[1];
            updatedItemAss.push(currentItem);
            setCorrectItemAssState(currentItem);
            setLiveItemAss(updatedItemAss);
            setLiveTotal(
              updatedItemAss.map((item) => parseFloat(item.self_total))
              .reduce((partialSum, a) => partialSum + a, 0)
            );
          });
        }
      });
    }
  };

  return (
    <>
      <ListGroup.Item className="my-0 ps-1">
        <p className="lead" style={{ marginBottom: "1%", marginTop: "1%" }}>
          &nbsp;&nbsp;
          <Button onClick={(e) => handleEdit(e, dessert)} size="sm">
            {editState ? "Done Editing" : "Edit Quantity"}
          </Button>
          &nbsp;&nbsp;
          {editState ? (
            <span>
              <textarea
                className="form-control mx-2"
                defaultValue={correctItemAssState.quantity}
                onChange={(e) => setQuantityState(e.target.value)}
                style={{
                  width: "3rem",
                  height: "1rem",
                  display: "inline",
                }}
              />
            </span>
          ) : (
            <span>{correctItemAssState.quantity} of &nbsp;</span>
          )}
          {dessert.english_name} &nbsp; / &nbsp; {dessert.arabic_name}
          <Badge
            bg="danger"
            pill
            className="cartBadge btn"
            onClick={() => handleRemove(dessert)}
          >
            X
          </Badge>
          <span className="lead cartBadge mx-4">${dessert.price}</span>
        </p>
      </ListGroup.Item>
    </>
  );
}

export default MapCartItems;
