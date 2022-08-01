import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

function RenderCartItems({
  dessertsInCart,
  cartItemAssocation,
  userId,
  setCart,
}) {
  const [reflectiveDesserts, setReflectiveDesserts] = useState(dessertsInCart);
  const [liveItemsAss, setLiveItemAss] = useState(cartItemAssocation);
  const [liveTotal, setLiveTotal] = useState(
    liveItemsAss
      .map((item) => parseFloat(item.self_total))
      .reduce((partialSum, a) => partialSum + a, 0)
  );
  console.log(reflectiveDesserts);
  console.log(cartItemAssocation);
  // console.log(liveTotal);

  let handleRemove = (dessert) => {
    let selectedCartItem = liveItemsAss.find(
      (item) => item.dessert_id === dessert.id
    ).id;
    let desId = dessert.id;
    let cartAfterDelete = reflectiveDesserts.filter((des) => des.id !== desId);
    let newItemTotal =
      liveTotal -
      liveItemsAss.find((item) => item.dessert_id === dessert.id).self_total;
    console.log(newItemTotal);

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

  return (
    <>
      <ListGroup variant="flush " className="my-5 mx-3">
        {reflectiveDesserts.map((dessert) => (
          <ListGroup.Item key={dessert.id}>
            <p className="lead">
              <span>
                {
                  cartItemAssocation.find(
                    (item) => item.dessert_id === dessert.id
                  ).quantity
                }
                &nbsp;&nbsp;
              </span>
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
