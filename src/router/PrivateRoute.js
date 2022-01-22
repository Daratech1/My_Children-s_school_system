import React from "react";

import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const token = localStorage.getItem('token')
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      (!isAuthenticated && !token)  ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);
PrivateRoute.propTypes = {
  auth: PropTypes.object,
  component: PropTypes.func,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
