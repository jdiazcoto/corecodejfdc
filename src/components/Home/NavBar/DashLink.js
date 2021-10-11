import React from "react";
import { Link } from "react-router-dom";

const DashLink = () => {
  return (
    <div>
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <button className="btn  btn-outline-success nav-link mx-3 ">
          Dashboard
        </button>
      </Link>
    </div>
  );
};

export default DashLink;
