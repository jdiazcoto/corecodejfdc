import React, { useState, useContext } from "react";
import logo from "../../../imgs/logo.png";
import "bootstrap/js/src/collapse.js";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import DashBoardHome from "../../DashBoard/Home/DashboardHome";
import Layout from "../../Layout/Layout";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";
import AuthContext from "../../../context/auth-context";
import DashLink from "./DashLink";

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      await authCtx.logout();
      history.push("/");
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <a className="navbar-brand  font-weight-bolder" href="/">
          <img
            src={logo}
            alt="Logo"
            width="90"
            height="90"
            className="vertical-align-middle"
          />
          Money Measure
        </a>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${
            isNavCollapsed ? "collapse" : ""
          } navbar-collapse justify-content-end`}
          id="navbarsExample09"
        >
          <ul className="navbar-nav">
            {authCtx.currentUser ? (
              <>
                <DashLink />

                <div className="m-2">Welcome {authCtx.currentUser.email}</div>
                <button
                  className="btn  btn-outline-danger nav-link mx-3 "
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span className="nav-link nav-item mx-3">Home</span>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <span className="nav-link nav-item mx-3">Contact Us</span>
                </Link>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <button className="btn  btn-outline-primary nav-link mx-3 ">
                    Sign Up
                  </button>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <button className="btn  btn-outline-danger nav-link mx-3 ">
                    Login
                  </button>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
        <Layout path="/dashboard" component={DashBoardHome}></Layout>
      </Switch>
    </Router>
  );
};

export default NavBar;
