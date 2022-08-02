import React, { useEffect, useState } from "react";
import RenderHistory from "./RenderHistory";
import HorizontalLine from "./HorizontalLine";

function OrderHistory({ userId, cart_owner }) {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    fetch(`/order-history`)
      .then((resp) => resp.json())
      .then((data) => setOrderHistory(data));
  }, []);

  let acceptedOrders = orderHistory.filter(
    (order) => order.acceptance_status === true
  );

  let deniedOrders = orderHistory
    .filter((order) => order.acceptance_status === false)
    .filter((order) => order.current_cart === false);

  let finishedOrders = orderHistory
    .filter((order) => order.acceptance_status === true)
    .filter((order) => order.completed_status === true);

  //   console.log(acceptedOrders);
  //   console.log(deniedOrders);
  //   console.log(finishedOrders);

  return (
    <div style={{ paddingBottom: "40%" }}>
      {orderHistory && orderHistory.length > 0 ? (
        <>
          {/* <div> */}
          {/* <h1 className="display-5 userOrderHistory mx-4">Finsihed Orders...</h1> */}
          <HorizontalLine title={"Finished Orders"} />
          {finishedOrders.map((order) => (
            <RenderHistory
              key={order.id}
              cartItems={order.cart_items}
              desserts={order.desserts}
              order={order}
            />
          ))}
          {/* </div> */}
          {/* <div> */}
          {/* <h1 className="display-5 userOrderHistory mx-4">Accepted Orders...</h1> */}
          <HorizontalLine title={"Accepted Orders"} />
          {acceptedOrders.map((order) => (
            <RenderHistory
              key={order.id}
              cartItems={order.cart_items}
              desserts={order.desserts}
              order={order}
            />
          ))}
          {/* </div> */}
          {/* <div> */}
          {/* <h1 className="display-5 userOrderHistory mx-4">Denied Orders...</h1> */}
          <HorizontalLine title={"Denied Orders"} />
          {deniedOrders.map((order) => (
            <RenderHistory
              key={order.id}
              cartItems={order.cart_items}
              desserts={order.desserts}
              order={order}
            />
          ))}
          {/* </div> */}
        </>
      ) : (
        <h1 className="display-4 text-center">
          {cart_owner}, you have no previous orders
        </h1>
      )}
    </div>
  );
}

export default OrderHistory;
