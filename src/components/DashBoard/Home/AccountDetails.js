import React from "react";

const AccountDetails = ({ balance }) => {
  return (
    <>
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
      {balance.map((data) => (
        <>
          <div className="row" key={data.id}>
            <div className="col">
              <div className="card-body">{data.description}</div>
            </div>
            <div className="col">
              <div className="card-body">{data.product}</div>
            </div>
            <div className="col">
              <div className="card-body">
                {data.balance} {data.currency}
              </div>
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
    </>
  );
};

export default AccountDetails;
