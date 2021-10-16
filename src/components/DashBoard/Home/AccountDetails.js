import React from "react";

const AccountDetails = ({ balance }) => {
  return (
    <>
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
    </>
  );
};

export default AccountDetails;
