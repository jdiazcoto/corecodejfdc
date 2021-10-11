import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import TextFieldLogIn from "./TextFieldLogIn";
import AuthContext from "../../../context/auth-context";
const Login = () => {
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);
  const email = useRef();
  const password = useRef();
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      setError("");
      setDisableSubmit(true);
      console.log(email.current.value);
      console.log(password.current.value);
      await authCtx.login(email.current.value, password.current.value);
      history.push("/dashboard");
    } catch {
      setError("Ocurrio un error, no se puede iniciar sesion");
    }
    setDisableSubmit(false);
  };

  return (
    <div className="container mt-3">
      {JSON.stringify(authCtx.currentUser)}
      <div className="row">
        <div className="col-md-5">
          <h1 className="my-4 font-weight-bold .display-4">Log In</h1>
          <div className="mb-2">
            <label>Email</label>
            <input
              className="form-control shadow-none"
              label="Email"
              ref={email}
            />
          </div>
          <div className="mb-2">
            <label>Password</label>
            <input
              className="form-control shadow-none"
              type="password"
              ref={password}
            />
          </div>
          <button
            className="btn btn-dark mt-3"
            onClick={handleSubmit}
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
