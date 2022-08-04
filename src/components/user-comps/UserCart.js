import React, { useState, useEffect } from "react";
import RenderCartItems from "./RenderCartItems";
import Alert from "react-bootstrap/Alert";

function UserCart({ userId, cart_owner }) {
  const [cart, setCart] = useState();
  const [showUpdatedState, setShowUpdatedState] = useState(false);

  useEffect(() => {
    fetch(`/retrieve-cart/${userId}`)
      .then((resp) => resp.json())
      .then((data) => setCart(data));
  }, [userId]);

  const changeStateTrue = () => {
    setShowUpdatedState(true);
    setTimeout(changeStateToFalse, 2000);
  };

  const changeStateToFalse = () => {
    setShowUpdatedState(false);
  };

  // console.log(cart)
  // console.log(cart.show_cart_items)
  // console.log(userId);
  // console.log("hi from userCart");

  return (
    <>
      {showUpdatedState ? (
        <span className="text-center">
          <Alert variant={"success"} className="fs-3 sticky-top">
            Cart was updated!
          </Alert>
        </span>
      ) : null}
      <div style={{ paddingBottom: "40%" }}>
        {cart && cart.cart_items.length !== 0 ? (
          <RenderCartItems
            dessertsInCart={cart.desserts}
            cartItemAssocation={cart.cart_items}
            userId={userId}
            setCart={setCart}
            changeStateTrue={changeStateTrue}
          />
        ) : (
          <h1 className="display-4">
            {cart_owner}, you do not currently have any items in your cart.
          </h1>
        )}
      </div>
    </>
  );
}

export default UserCart;
