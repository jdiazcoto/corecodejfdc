import React from "react";

const BalAndMovements = () => {
  return (
    <>
      <div className="card mt-5 ">
        <div className="row">
          <div className="col">
            <div className="card-body d-flex justify-content-center">
              Choose Your Account
            </div>
          </div>

          <div className="col">
            <div className="btn-group my-2">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{ minWidth: "300px" }}
              >
                Action
              </button>

              <ul className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  HN 1111111
                </button>
                <button className="dropdown-item" type="button">
                  HN 2222222
                </button>
                <button className="dropdown-item" type="button">
                  US 3333333
                </button>
                <button className="dropdown-item" type="button">
                  US 4444444
                </button>
              </ul>
            </div>
          </div>
          <div className="col">
            <label>Account Balance</label>
            <input type="text" placeholder="LPS" />
          </div>
        </div>
      </div>

      <div className="card mt-5 ">
        <div className="row">
          <div className="col">
            <div className="card-body d-flex justify-content-start">
              Monthly Transactions
            </div>
            <div className="row">
              <div className="col">
                <label>From</label>
                <input type="text" placeholder="09/01/2021" />
              </div>
              <div className="col">
                <label>To</label>
                <input type="text" placeholder="09/24/2021" />
              </div>
              <div className="col">
                <button type="button" class="btn btn-secondary">
                  Query
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex align-items-center justify-content-center my-4">
          <div className="card " style={{ width: "80%" }}>
            <div className="row py-2">
              <div className="col">Date</div>
              <div className="col">Reference</div>

              <div className="col">Code</div>
              <div className="col">Description</div>
              <div className="col">Debits</div>
              <div className="col">Credits</div>
              <div className="col">Balance</div>
            </div>
            <div className="row">
              <div className="col">Date</div>
              <div className="col">Reference</div>

              <div className="col">Code</div>
              <div className="col">Description</div>
              <div className="col">Debits</div>
              <div className="col">Credits</div>
              <div className="col">Balance</div>
            </div>
            <div className="row">
              <div className="col">Date</div>
              <div className="col">Reference</div>

              <div className="col">Code</div>
              <div className="col">Description</div>
              <div className="col">Debits</div>
              <div className="col">Credits</div>
              <div className="col">Balance</div>
            </div>
            <div className="row">
              <div className="col">Date</div>
              <div className="col">Reference</div>

              <div className="col">Code</div>
              <div className="col">Description</div>
              <div className="col">Debits</div>
              <div className="col">Credits</div>
              <div className="col">Balance</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BalAndMovements;
