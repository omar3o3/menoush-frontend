import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginComp from "./LoginComp";

import UserHome from "./UserHome"
import UserAccount from "./UserAccount"
import UserNavBar from "./UserNavBar"
import GalleryComp from "./GalleryComp"
import UserCart from "./UserCart"


import AdminNavBar from "./AdminNavBar"
import CreateSection from "./CreateSection";

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
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
