import React, { useState, useEffect } from "react";
import RenderPendingOrders from "./RenderPendingOrders";

function PendingOrders() {
  const [pendingOrders, setPendingOrders] = useState();

  useEffect(() => {
    fetch("/get-pending-orders")
      .then((resp) => resp.json())
      .then((data) => setPendingOrders(data));
  }, []);

  // console.log(pendingOrders);
  // console.log('hi')

  return (
    <div className="mt-5" style={{ paddingBottom: "40%" }}>
      {pendingOrders && pendingOrders.length !== 0 ? (
        pendingOrders.map((order) => (
          <RenderPendingOrders
            key={order.id}
            order={order}
            cartItems={order.cart_items}
            desserts={order.desserts}
            UserFullName={order.show_pending_cart_name}
            // checkOutDate = {order.day_checked_out}
            checkOutDate = {order.converted_checkout_date}
          />
        ))
      ) : (
        <h1 className="fs-1 text-center">No Pending Orders</h1>
      )}
    </div>
  );
}

export default PendingOrders;
