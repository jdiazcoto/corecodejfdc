import React, { useState } from "react";
import logo from "../../../imgs/logo.png";
import "bootstrap/js/src/collapse.js";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import DashBoardHome from "../../DashBoard/Home/DashboardHome";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

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
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="nav-link nav-item mx-3">Home</span>
            </Link>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <span className="nav-link nav-item mx-3">Contact Us</span>
            </Link>
            {/*
            <li className="btn  btn-outline-primary nav-link text-white mx-3 ">
              <Link to="/signup" /* style={{ textDecoration: "none" >
                Sign Up
              </Link>
            </li> */}

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

            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <button className="btn  btn-outline-success nav-link mx-3 ">
                Dashboard
              </button>
            </Link>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard" component={DashBoardHome}></Route>
      </Switch>
    </Router>
  );
};

export default NavBar;
