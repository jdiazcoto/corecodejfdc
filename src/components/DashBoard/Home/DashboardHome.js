import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Settings from "../Settings/Settings";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import Transfer from "../Transfers/Transfer";
import BalAndMovements from "../BalAndMovements/BalAndMovements";
import ExpensesVsIncome from "../ExpensesVsIncome/ExpensesVsIncome";
import Account from "./Account";

const DashBoardHome = () => {
  const [showTemp, setShowTemp] = useState(true);

  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-light"
            style={{ width: "280px", minHeight: "100vh" }}
          >
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <Link
                  to="/dashboard/"
                  className="nav-link link-dark"
                  style={{ width: "280px" }}
                >
                  Dashboard Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard/balancesandmovs"
                  className="nav-link link-dark"
                  style={{ width: "280px" }}
                >
                  Balances and Movements
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard/expensesandincomes"
                  className="nav-link link-dark"
                >
                  Expenses/Incomes Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/transfers" className="nav-link link-dark">
                  Transfers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard/currencyexchange"
                  className="nav-link link-dark"
                >
                  Currency Exchange
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/settings" className="nav-link link-dark">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-8 text-center">
          {/*           {showTemp ? <Transfer /> : <Account />}
           */}{" "}
          <Switch>
            <Route path="/dashboard/" exact component={Account}></Route>
            <Route
              path="/dashboard/balancesandmovs"
              component={BalAndMovements}
              style={{ marginLeft: "280px" }}
            ></Route>
            <Route
              path="/dashboard/expensesandincomes"
              component={ExpensesVsIncome}
              style={{ marginLeft: "280px" }}
            ></Route>
            <Route
              path="/dashboard/transfers"
              component={Transfer}
              style={{ marginLeft: "280px" }}
            ></Route>
            <Route
              path="/dashboard/currencyexchange"
              component={CurrencyExchange}
              style={{ marginLeft: "280px" }}
            ></Route>
            <Route path="/dashboard/settings" component={Settings}></Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default DashBoardHome;
