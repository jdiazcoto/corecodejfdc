import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Settings from "../Settings/Settings";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import Transfer from "../Transfers/Transfer";
import BalAndMovements from "../BalAndMovements/BalAndMovements";
import ExpensesVsIncome from "../ExpensesVsIncome/ExpensesVsIncome";
import Account from "./Account";

const DashBoardHome = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-light"
            style={{ width: "280px" }}
          >
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <Link to="/dashboard/" className="nav-link link-dark">
                  Dashboard Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard/balancesandmovs"
                  className="nav-link link-dark"
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
          <Account />
        </div>
        <Switch>
          {/* <Route path="/dashboard/" exact component={DashBoardHome}></Route> */}
          <Route
            path="/dashboard/balancesandmovs"
            component={BalAndMovements}
          ></Route>
        </Switch>

        <Route
          path="/dashboard/expensesandincomes"
          component={ExpensesVsIncome}
        ></Route>
        <Route path="/dashboard/transfers" component={Transfer}></Route>
        <Route
          path="/dashboard/currencyexchange"
          component={CurrencyExchange}
        ></Route>
        <Route path="/dashboard/settings" component={Settings}></Route>
      </div>
    </>
  );
};

export default DashBoardHome;
