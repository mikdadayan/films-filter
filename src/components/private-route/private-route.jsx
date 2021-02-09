import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  auth: { isAuthenticated },
  component: Component,
  ...rest
}) => {
  const path = rest.path;
  const redirectPath = isAuthenticated ? "/" : "/login";
  if (path === "/addFilm") {
    return isAuthenticated ? (
      <Route {...rest} render={(props) => <Component {...props} />} />
    ) : (
      <Redirect to={redirectPath} />
    );
  } else {
    return !isAuthenticated ? (
      <Route {...rest} render={(props) => <Component {...props} />} />
    ) : (
      <Redirect to={redirectPath} />
    );
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
