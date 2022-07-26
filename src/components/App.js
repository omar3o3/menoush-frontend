import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginComp from "./LoginComp";

import UserHome from "./user-comps/UserHome"
import UserAccount from "./user-comps/UserAccount"
import UserNavBar from "./user-comps/UserNavBar"
import GalleryComp from "./user-comps/GalleryComp"
import UserCart from "./user-comps/UserCart"


import AdminNavBar from "./admin-comps/AdminNavBar"
import CreateSection from "./admin-comps/CreateSection";
import AdminEditDessert from "./admin-comps/AdminEditDessert";

function App() {

  const [user , setUser] = useState(null)

    useEffect(() => {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    },[]);

    // console.log(user)

  if (!user) return <LoginComp onLogin={setUser} />;
  // if (!user) return <h1>hi</h1>

  return (
    <>
      {user && user.admin ? (
        <AdminNavBar user={user} setUser={setUser} />
      ) : (
        <UserNavBar user={user} setUser={setUser} />
      )}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <UserHome />
          </Route>

          <Route exact path="/login">
            <LoginComp />
          </Route>

          <Route exact path="/gallery">
            <GalleryComp />
          </Route>

          <Route exact path="/cart">
            <UserCart />
          </Route>

          <Route exact path="/user-account">
            <UserAccount />
          </Route>

          <Route exact path="/create">
            <CreateSection />
          </Route>

          <Route exact path="/edit-desserts">
            <AdminEditDessert />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
