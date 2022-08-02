import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Spinner from "react-bootstrap/Spinner";

import LoginComp from "./LoginComp";

import UserHome from "./user-comps/UserHome";
import UserAccount from "./user-comps/UserAccount";
import UserNavBar from "./user-comps/UserNavBar";
import GalleryComp from "./user-comps/GalleryComp";
import UserCart from "./user-comps/UserCart";
import OrderHistory from "./user-comps/OrderHistory";

import AdminNavBar from "./admin-comps/AdminNavBar";
import CreateSection from "./admin-comps/CreateSection";
// import AdminEditDessert from "./admin-comps/AdminEditDessert";
import AdminMapDessertType from "./admin-comps/AdminMapDessertType";
import PendingOrders from "./admin-comps/PendingOrders";
import AcceptedOrders from "./admin-comps/AcceptedOrders";

function App() {
  const [user, setUser] = useState(null);
  // const [userLoadingState, setUserLoadingState] = useState(false);
  // const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    // setUserLoadingState(true);
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    // setUserLoadingState(false);
  }, []);

  // useEffect(() => {
  //   fetch("/desserts")
  //     .then((resp) => resp.json())
  //     .then((data) => setDesserts(data));
  // }, []);

  // console.log(user)
  // console.log(user.id)

  if (!user) return <LoginComp onLogin={setUser} />;
  // if (!user) return <h1>hi</h1>

  return (
    <>
      {/* {userLoadingState ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : null} */}
      {user && user.admin ? (
        <AdminNavBar user={user} setUser={setUser} />
      ) : (
        <UserNavBar user={user} setUser={setUser} />
      )}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <UserHome user={user} />
          </Route>
          <Route exact path="/login">
            <LoginComp />
          </Route>
          <Route exact path="/gallery">
            <GalleryComp />
          </Route>
          <Route exact path="/cart">
            <UserCart userId={user.id} cart_owner={user.first_name} />
          </Route>
          <Route exact path="/order-history">
            <OrderHistory userId={user.id} cart_owner={user.first_name} />
          </Route>
          <Route exact path="/user-account">
            <UserAccount />
          </Route>
          <Route exact path="/create">
            <CreateSection />
          </Route>
          <Route exact path="/edit-desserts">
            <AdminMapDessertType />
          </Route>
          <Route exact path="/pending-orders">
            <PendingOrders />
          </Route>
          <Route exact path="/accepted-orders">
            <AcceptedOrders />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
