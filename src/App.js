import "./App.css";
import Navigation from "./components/navigation/navigation";
import Main from "./components/main/main";
import NoMatch from "./pages/404/404";
import AddFilm from "./pages/addFilm/addFilm";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Registration from "./pages/register/register";
import Login from "./pages/login/login";
import AboutFilm from "./pages/about-film/about-film";
import PrivateRoute from "./components/private-route/private-route";
import { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { loadFilms } from "./redux/film/film.action";
import { loadUsers } from "./redux/auth/auth.action";

function App({ loadUsers, loadFilms }) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let films = JSON.parse(localStorage.getItem("films")) || [];
  useEffect(() => {
    loadUsers(users);
    loadFilms(films);
  }, [users, films]);

  return (
    <BrowserRouter>
      <div className="page" id="page">
        <Navigation />
        <div className="App">
          <Switch>
            {/* private */}

            <PrivateRoute path="/addFilm" component={AddFilm} />
            {/* private */}
            <PrivateRoute path="/registration" component={Registration} />
            {/* private */}
            <PrivateRoute path="/login" component={Login} />

            <Route
              exact
              path="/about-film"
              render={() => <AboutFilm />}
            ></Route>
            <Route exact path="/" render={() => <Main />}></Route>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default connect(null, { loadUsers, loadFilms })(App);
