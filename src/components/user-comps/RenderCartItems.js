import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

function RenderCartItems({ dessertsInCart, cartItemAssocation }) {
  // console.log(dessertsInCart);
  //   console.log(cartItemAssocation);
  const [reflectiveDesserts, setReflectiveDesserts] = useState(dessertsInCart);

  // console.log(reflectiveDesserts);

  let handleRemove = (dessert) => {
    let selectedCartItemAssociated = cartItemAssocation.find(
      (item) => item.dessert_id === dessert.id
    ).id;
    // console.log(dessert);
    // console.log(selectedCartItemAssociated);
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
      {/* <h1>hi from render cart items</h1> */}
    </>
  );
}

export default RenderCartItems;

// let id = dessert.id
// let updatedCart = dessertsState
// setDessertsState(updatedCart)
// console.log(dessert);
// fetch("/remove-from-cart", {
//   method: "DELETE",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     cart_item_id: dessert.id,
//   }),
// })
// .then((resp) => resp.json())
// .then(data => console.log(data))
//   .then(updatedCart.filter((dessert) => dessert.id !== id))
//   .then(setDessertsState(updatedCart));
