import React from "react";
import {Route, Redirect, Router, Switch} from "react-router-dom";
import {connect} from "react-redux";
import App from "./App";
import asyncComponent from "./helpers/AsyncFunc";
import Header from './Layout/Header'
import Body from './Layout/Body'
import Footer from './Layout/Footer'

const RestrictedRoute = ({component: Component, isLoggedIn, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: {from: props.location}
          }}
        />
      )
    }
  />
);
const PublicRoutes = ({history, isLoggedIn}) => {
  return (
    <Router history={history}>
      <div>
        <Header/>
        <Body>
        <Switch>
          <Route
            exact
            path={"/"}
            component={asyncComponent(() => import("./Pages/Home"))}
          />
          <Route
            exact
            path={"/actions"}
            component={asyncComponent(() => import("./Pages/Actions"))}
          />
          <Route
            exact
            path={"/gbrs"}
            component={asyncComponent(() => import("./Pages/Gbrs"))}
          />
          <Route
            exact
            path={"/locked-index"}
            component={asyncComponent(() => import("./Pages/LockedIndex"))}
          />
          <Route
            exact
            path={"/locked-users"}
            component={asyncComponent(() => import("./Pages/LockedUsers"))}
          />
          <Route
            exact
            path={"/proceed-gbr"}
            component={asyncComponent(() => import("./Pages/ProceedGbr"))}
          />
          <Route
            exact
            path={"/proceed-suggestion"}
            component={asyncComponent(() => import("./Pages/ProceedSuggestion"))}
          />
          <Route
            exact
            path={"/review-user"}
            component={asyncComponent(() => import("./Pages/ReviewUser"))}
          />
          <Route
            exact
            path={"/role-review"}
            component={asyncComponent(() => import("./Pages/RoleReview"))}
          />
          <Route
            exact
            path={"/user-search"}
            component={asyncComponent(() => import("./Pages/UserSearch"))}
          />
          <Route
            exact
            path={"/single-role"}
            component={asyncComponent(() => import("./Pages/SingleRole"))}
          />
          <Route
            exact
            path={"/users/:username"}
            component={asyncComponent(() => import("./Pages/User"))}
          />
        </Switch>
        </Body>
        <Footer/>
      </div>
    </Router>
  );
};

export default connect(state => ({
  isLoggedIn: false
}))(PublicRoutes);
