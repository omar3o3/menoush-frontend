import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

function RenderCartItems({ dessertsInCart, cartItemAssocation }) {

  const [reflectiveDesserts, setReflectiveDesserts] = useState(dessertsInCart);

  let handleRemove = (dessert) => {
    let selectedCartItemAssociated = cartItemAssocation.find(
      (item) => item.dessert_id === dessert.id
    ).id;
    let desId = dessert.id;
    let cartAfterDelete = reflectiveDesserts.filter((des) => des.id !== desId);

    fetch("/remove-from-cart", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        cart_item_id: selectedCartItemAssociated,
      }),
    }).then((resp) => {
      if (resp.ok) setReflectiveDesserts(cartAfterDelete);
    });
  };

  return (
    <>
      <ListGroup variant="flush " className="my-5 mx-3">
        {reflectiveDesserts.map((dessert) => (
          <ListGroup.Item key={dessert.id}>
            <p className="lead">
              {dessert.english_name} &nbsp; / &nbsp; {dessert.arabic_name}
              <Badge
                bg="danger"
                pill
                className="cartBadge btn"
                onClick={() => handleRemove(dessert)}
              >
                X
              </Badge>
            </p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default RenderCartItems;
