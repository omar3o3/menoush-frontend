import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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

let navBarTextColor = "#d8a941";
let homeCardButtonColor = "#654813";

function App() {
  const [user, setUser] = useState(null);
  // let history = useHistory();
  // const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // console.log(user)
  // console.log(user.id)

  if (!user) return <LoginComp onLogin={setUser} />;
  // if (!user) return <h1>hi</h1>
  let customGold = "#d8a941";
  let customBrown = "#654813";
  let customWhitish = "#f1f1f3";
  let customBlack = "#1d1a0c";
  let customGrey = "#5b503d";

  return (
    <div style={{ backgroundColor: customGrey }}>
      {user && user.admin ? (
        <>
          <AdminNavBar
            user={user}
            setUser={setUser}
            navBarTextColor={navBarTextColor}
          />
        </>
      ) : (
        <>
          <UserNavBar
            user={user}
            setUser={setUser}
            navBarTextColor={navBarTextColor}
            homeCardButtonColor={homeCardButtonColor}
          />
        </>
      )}
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home" />
          {user.admin ? (
            <Redirect
              from={["/home", "/gallery", "/cart", "/order-history"]}
              to="/create"
            />
          ) : (
            <Redirect
              from={[
                "/create",
                "/edit-desserts",
                "/pending-orders",
                "/accepted-orders",
              ]}
              to="/home"
            />
          )}
          <Route exact path="/home">
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
    </div>
  );
}

export default App;
