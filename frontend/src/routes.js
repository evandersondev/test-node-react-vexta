import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";

import Main from "./pages/Main";
import Info from "./pages/Info";
import New from "./pages/New";

const Routes = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/info/:id" component={Info} />
        <Route exact path="/new" component={New} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
