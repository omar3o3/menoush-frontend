import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import UserHome from "./UserHome"
import UserAccount from "./UserAccount"
import UserNavBar from "./UserNavBar"
import GalleryComp from "./GalleryComp"
import UserCart from "./UserCart"

function App() {


  return (
    <>
    {user.admin? <UserNavBar/> : <adminNav/> }
      
        <BrowserRouter>
            <Switch>

              <Route exact path="/">
                <UserHome/>
              </Route>

              <Route exact path="/gallery">
                <GalleryComp />
              </Route>

              <Route exact path="/cart">
                <UserCart />
              </Route>

              <Route exact path="/user-account">
                <UserAccount/>
              </Route>

          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
