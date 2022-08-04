import React, { useState } from "react";
import MapCartItems from "./MapCartItems";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function RenderCartItems({
  dessertsInCart,
  cartItemAssocation,
  userId,
  setCart,
}) {
  const [reflectiveDesserts, setReflectiveDesserts] = useState(dessertsInCart);
  const [liveItemsAss, setLiveItemAss] = useState(cartItemAssocation);
  // const [quantityState, setQuantityState] = useState(0);
  // const [editState, setEditState] = useState(false);
  const [liveTotal, setLiveTotal] = useState(
    liveItemsAss
      .map((item) => parseFloat(item.self_total))
      .reduce((partialSum, a) => partialSum + a, 0)
  );

  let handleRemove = (dessert) => {
    let selectedCartItem = liveItemsAss.find(
      (item) => item.dessert_id === dessert.id
    ).id;
    let desId = dessert.id;
    let cartAfterDelete = reflectiveDesserts.filter((des) => des.id !== desId);
    let newItemTotal =
      liveTotal -
      liveItemsAss.find((item) => item.dessert_id === dessert.id).self_total;

    fetch("/remove-from-cart", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        cart_item_id: selectedCartItem,
      }),
    }).then((resp) => {
      if (resp.ok) {
        setReflectiveDesserts(cartAfterDelete);
        setLiveTotal(newItemTotal);
      }
    });
  };

  let handleCheckout = () => {
    // console.log(userId)
    fetch("/checkout-cart", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => setCart(data));
    // .then((data) => console.log(data));
    //set an alert alert state to true to let user know order was place
  };
  // <ion-icon name="create-outline"></ion-icon>
  return (
    <>
      <ListGroup variant="flush " className="my-5 mx-3">
        {reflectiveDesserts.map((dessert) => (
          <MapCartItems
            key={dessert.id}
            dessert={dessert}
            liveItemsAss={liveItemsAss}
            setLiveItemAss={setLiveItemAss}
            handleRemove={handleRemove}
            setLiveTotal={setLiveTotal}
          />
        ))}
        <ListGroup.Item variant="secondary">
          <span className="h4">
            <Badge bg="success btn" onClick={() => handleCheckout()}>
              Checkout Cart
            </Badge>
          </span>
          <p className="h4 cartBadge">
            Total:&nbsp;&nbsp;$
            {liveTotal}
          </p>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default RenderCartItems;
