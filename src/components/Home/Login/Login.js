import React from "react";
const Login = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <h1 className="my-4 font-weight-bold .display-4">Log In</h1>
          <label>Email</label>
          <input
            className="form-control shadow-none"
            label="Email"
            name="email"
            type="email"
          />
          <label>Password</label>
          <input
            className="form-control shadow-none"
            label="Password"
            name="password"
            type="password"
          />
          <button className="btn btn-dark mt-3" type="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
