import React from "react";
import { Link } from "react-router-dom";

const DashLink = () => {
  return (
    <div>
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <button className="btn  btn-outline-dark  mx-3 justify-content-start ">
          Dashboard
        </button>
      </Link>
    </div>
  );
};

export default DashLink;
