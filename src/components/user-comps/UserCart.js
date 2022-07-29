import React, { useEffect } from "react";

function UserCart({ user }) {

  // useEffect(() => {
  //   fetch("/retrieve-cart", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       user_id: user.id,
  //     }),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data));
  // },[]);

    useEffect(() => {
      fetch(`/retrieve-cart/${user.id}`)
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    }, [user]);

  return <div>UserCart</div>;
}

export default UserCart;
