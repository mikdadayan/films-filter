import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/auth/auth.action";
import SearchBox from "../search-box/search-box";
import "./navigation.css";

function Navigation({ auth: { isAuthenticated }, logoutUser }) {
  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
  };
  return (
    <div className="navigation">
      <div className="nav-left">
        <NavLink to="/" activeClassName="menuActive" exact={true}>
          Home
        </NavLink>
        {isAuthenticated ? (
          <NavLink to="/addFilm" activeClassName="menuActive">
            Add film
          </NavLink>
        ) : null}
      </div>
      <div className="nav-right">
        <SearchBox />
        {!isAuthenticated ? (
          <Fragment>
            <NavLink to="/registration" activeClassName="menuActive">
              Registeration
            </NavLink>
            <NavLink to="/login" activeClassName="menuActive">
              Login
            </NavLink>
          </Fragment>
        ) : (
          <NavLink to="/logout" onClick={handleLogout}>
            Log Out
          </NavLink>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navigation);
