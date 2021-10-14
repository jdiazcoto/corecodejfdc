import React, { useState } from "react";
import { useSelector } from "react-redux";
const Account = () => {
  const accountBalanceLocal = useSelector((state) => state.accountLocal);
  const accountBalanceDollars = useSelector((state) => state.accountDollars);

  /* const [accountBalanceDollars, setAccountBalanceDollars] = useState([
    {
      id: 1,
      description: "US-BANK ACCOUNT",
      product: "754015266",
      balance: "97",
    },
    {
      id: 2,
      description: "US-BANK ACCOUNT",
      product: "750996989",
      balance: "336",
    },
    {
      id: 3,
      description: "US-BANK ACCOUNT",
      product: "751429709",
      balance: "9",
    },
    {
      id: 4,
      description: "US-BANK ACCOUNT",
      product: "751678901",
      balance: "41260",
    },
    {
      id: 5,
      description: "US-BANK ACCOUNT",
      product: "757766889",
      balance: "9697",
    },
  ]);
 */
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
        ))}
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
