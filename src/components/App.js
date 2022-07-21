import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserHome from "./UserHome"
import UserAccount from "./UserAccount"

function App() {


  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <UserHome/>
            </Route>

            <Route path="/user-account">
              <UserAccount/>
            </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
