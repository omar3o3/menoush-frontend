import React, { useState, useEffect } from "react";
import RenderCartItems from "./RenderCartItems";

function UserCart({ user }) {
  const [cartDesserts, setCartDesserts] = useState([]);

  useEffect(() => {
    fetch(`/retrieve-cart/${user.id}`)
      .then((resp) => resp.json())
      .then((data) => setCartDesserts(data.show_cart_items));
  }, [user]);

  return (
    <>
      {cartDesserts ? (
        <RenderCartItems desserts={cartDesserts} />
      ) : (
        <h1 className="display-4">
          {user.first_name}, you do not currently have any items in your cart.
        </h1>
      )}
    </>
  );
}

export default UserCart;
