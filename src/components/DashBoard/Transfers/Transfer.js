import React from "react";

const Transfer = () => {
  return (
    <>
      <div className="row">
        <div className="col">Transfer to any account</div>
        <div className="col">Step 1: Select</div>
        <div className="col">Step 2: Confirm</div>
        <div className="col">Step 3: Result</div>
      </div>
      {/* d-flex align-items-center justify-content-center */}
      <div className="container my-4">
        <div className="card ">
          <div className="card-body d-flex justify-content-start">
            Sender's account
          </div>
          <div className="row">
            <div className="col">
              <div className="card-body d-flex justify-content-start">
                Choose your account number please
              </div>
            </div>

            <div className="col d-flex justify-content-start">
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
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="card ">
          <div className="card-body d-flex justify-content-start">
            Recipient's account
          </div>
          <div className="row">
            <div className="col">
              <div className="card-body d-flex justify-content-start">
                Choose your account number please
              </div>
            </div>

            <div className="col d-flex justify-content-start">
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
          </div>
        </div>
      </div>

      <div className="container my-4 d-flex justify-content-start">
        <h4>Amount to transfer</h4>

        <input type="number" placeholder="Enter an amount" className="mx-3" />
      </div>
      <div className="container my-4 d-flex justify-content-start">
        <textarea style={{ minWidth: "500px" }}>
          Enter an optional description
        </textarea>
      </div>
      <div className="container my-5 d-flex justify-content-start">
        <button className="btn btn-danger">Transfer</button>
      </div>
    </>
  );
};

export default Transfer;
