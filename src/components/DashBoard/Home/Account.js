import React from "react";

const Account = () => {
  return (
    <div>
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
        <div className="row">
          <div className="col">
            <div className="card-body">HN-BANK ACCOUNT</div>
          </div>
          <div className="col">
            <div className="card-body">7777777</div>
          </div>
          <div className="col">
            <div className="card-body">100 LPS</div>
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
      </div>
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
        <div className="row">
          <div className="col">
            <div className="card-body">US-BANK ACCOUNT</div>
          </div>
          <div className="col">
            <div className="card-body">7777777</div>
          </div>
          <div className="col">
            <div className="card-body">97 USD</div>
          </div>
          <div className="col">
            <div className="card-body">
              <button className="btn btn-outline-dark">
                <i class="bi bi-caret-right-fill"></i>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="card-body">
              <button className="btn btn-outline-dark">
                <i class="bi bi-caret-right-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
