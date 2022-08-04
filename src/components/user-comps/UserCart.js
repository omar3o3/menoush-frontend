import React, { useState, useEffect } from "react";
import RenderCartItems from "./RenderCartItems";
import Alert from "react-bootstrap/Alert";

function UserCart({ userId, cart_owner }) {
  const [cart, setCart] = useState();
  const [showUpdatedState, setShowUpdatedState] = useState(false);
  const [showCheckOutStatus, setCheckOutStatus] = useState(false);
  const [showDeletedStatus, setDeletedStatus] = useState(false);

  useEffect(() => {
    fetch(`/retrieve-cart/${userId}`)
      .then((resp) => resp.json())
      .then((data) => setCart(data));
  }, [userId]);

  const changeStateTrue = () => {
    setShowUpdatedState(true);
    setTimeout(changeStateToFalse, 3000);
  };

  const changeStateToFalse = () => {
    setShowUpdatedState(false);
  };

  const changeCheckOutStateToTrue = () => {
    setCheckOutStatus(true);
    setTimeout(changeCheckOutStateToFalse, 4000);
  };

  const changeCheckOutStateToFalse = () => {
    setCheckOutStatus(false);
  };

  const changeDeleteStateToTrue = () => {
    setDeletedStatus(true);
    setTimeout(changeDeleteStateToFalse, 3000);
  };

  const changeDeleteStateToFalse = () => {
    setDeletedStatus(false);
  };

  return (
    <>
      {showCheckOutStatus ? (
        <span className="text-center">
          <Alert variant={"success"} className="fs-3 sticky-top">
            Your order was placed! Please check your order history for further
            updates
          </Alert>
        </span>
      ) : null}
      {showUpdatedState ? (
        <span className="text-center">
          <Alert variant={"success"} className="fs-3 sticky-top">
            Cart was updated!
          </Alert>
        </span>
      ) : null}
      {showDeletedStatus ? (
        <span className="text-center">
          <Alert variant={"danger"} className="fs-3 sticky-top">
            Item was removed from your cart!
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
            changeCheckOutStateToTrue={changeCheckOutStateToTrue}
            changeDeleteStateToTrue={changeDeleteStateToTrue}
          />
        ) : (
          <h1
            className="display-4 my-5 text-center"
            style={{
              color: "#d8a941",
              marginRight: "8%",
              marginLeft: "8%",
            }}
          >
            {cart_owner}, you do not currently have any items in your cart.
          </h1>
        )}
      </div>
    </>
  );
}

export default UserCart;
