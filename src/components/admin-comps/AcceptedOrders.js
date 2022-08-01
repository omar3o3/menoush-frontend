import React , {useState , useEffect} from 'react'
import RenderAcceptedOrders from "./RenderAcceptedOrders";

function AcceptedOrders() {
  const [acceptedOrdersState , setAcceptedOrdersState] = useState()

  useEffect(() => {
    fetch("/get-accepted-orders")
      .then((resp) => resp.json())
      .then((data) => setAcceptedOrdersState(data));
  }, [])

  console.log(acceptedOrdersState);

  return (
    <div className="pendingOrderBottomMargin">
      {acceptedOrdersState && acceptedOrdersState.length !== 0 ? (
        acceptedOrdersState.map((order) => (
          <RenderAcceptedOrders
            key={order.id}
            order={order}
            cartItems={order.cart_items}
            desserts={order.desserts}
            UserFullName={order.show_pending_cart_name}
          />
        ))
      ) : (
        <h1 className="fs-1 text-center">No Accepted Orders</h1>
      )}
    </div>
  );
}

export default AcceptedOrders