import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";

import Home from "./pages/Home";
import Dates from "./pages/Dates";
import New from "./pages/New";

const Routes = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dates/:id" component={Dates} />
        <Route exact path="/new" component={New} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
