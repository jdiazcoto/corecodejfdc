import React, { useState } from "react";
import { useSelector } from "react-redux";
import AccountDetails from "./AccountDetails";
const Account = () => {
  const accountBalanceLocal = useSelector((state) => state.accountLocal);
  const accountBalanceDollars = useSelector((state) => state.accountDollars);

  return (
    <>
      <div className="card mt-5">
        <h5 className="card-title py-2">Account</h5>
        <div className="row">
          <div className="col">
            <div className="card-body">Description</div>
          </div>
          <div className="col">
            <div className="card-body">Product</div>
          </div>
          <div className="col">
            <div className="card-body">Balance</div>
          </div>
          <div className="col">
            <div className="card-body">Logs</div>
          </div>
          <div className="col">
            <div className="card-body">Transfer</div>
          </div>
        </div>
        <AccountDetails balance={accountBalanceLocal} />
        {/*
        {accountBalanceLocal.map((data) => (
          <>
            <div className="row" key={data.id}>
              <div className="col">
                <div className="card-body">{data.description}</div>
              </div>
              <div className="col">
                <div className="card-body">{data.product}</div>
              </div>
              <div className="col">
                <div className="card-body">{data.balance} LPS</div>
              </div>
              <div className="col">
                <button className="btn btn-outline-dark">
                  <i class="bi bi-caret-right-fill"></i>
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-dark">
                  <i class="bi bi-caret-right-fill"></i>
                </button>
              </div>
            </div>
          </>
        ))} */}
      </div>

      <div className="card mt-5">
        <h5 className="card-title py-2">Account</h5>
        {accountBalanceDollars.map((data) => (
          <>
            <div className="row" key={data.id}>
              <div className="col">
                <div className="card-body">{data.description}</div>
              </div>
              <div className="col">
                <div className="card-body">{data.product}</div>
              </div>
              <div className="col">
                <div className="card-body">{data.balance} USD</div>
              </div>
              <div className="col">
                <button className="btn btn-outline-dark">
                  <i class="bi bi-caret-right-fill"></i>
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-dark">
                  <i class="bi bi-caret-right-fill"></i>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Account;
