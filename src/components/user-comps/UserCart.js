import React, { useState, useEffect} from "react";
import RenderCartItems from "./RenderCartItems";

function UserCart({ userId, cart_owner }) {
  const [cart, setCart] = useState();

  useEffect(() => {
    fetch(`/retrieve-cart/${userId}`)
      .then((resp) => resp.json())
      .then((data) => setCart(data));
  }, [userId]);

  // console.log(cart)
  // console.log(cart.show_cart_items)
  // console.log(userId);
  // console.log("hi from userCart");

  return (
    <>
      {cart && cart.cart_items.length !== 0 ? (
        <RenderCartItems
          dessertsInCart={cart.show_cart_items}
          cartItemAssocation={cart.cart_items}
          userId = {userId}
          setCart = {setCart}
        />
      ) : (
        <h1 className="display-4">
          {cart_owner}, you do not currently have any items in your cart.
        </h1>
      )}
    </>
  );
}

export default UserCart;
