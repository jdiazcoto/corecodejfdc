import React from "react";

const AddAcount = () => {
  return (
    <>
      <div className="card m-3 ">
        <div className="d-flex">
          <button className="btn btn-outline-dark m-2">LPS</button>
          <button className="btn btn-outline-dark m-2">USD</button>
          <button className="btn btn-outline-dark m-2">EUR</button>
          <button className="btn btn-outline-dark m-2">QTZ</button>
          <button className="btn btn-outline-dark m-2">ETH</button>

          <button className="btn btn-outline-danger m-2">
            Add a new Account
          </button>
        </div>
      </div>
    </>
  );
};

export default AddAcount;
