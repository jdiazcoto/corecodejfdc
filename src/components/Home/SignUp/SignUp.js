import React, { useState, useContext } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import signUpImage from ".../../../src/imgs/landingPage.svg";
import AuthContext from "../../../context/auth-context";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const authCtx = useContext(AuthContext);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const [values, setValues] = useState(null);

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={async (values) => {
        try {
          setError("");
          setDisableSubmit(true);
          console.log(values.email, values.password);
          await authCtx.register(values.email, values.password);
          history.push("/");
        } catch {
          setError("Ocurrio un error, no se puede registrar el usuario");
          console.log({ error });
        }
        setDisableSubmit(false);
      }}
    >
      {(formik) => (
        <div>
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-5">
                <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                <Form>
                  <TextField label="First Name" name="firstName" type="text" />
                  <TextField label="Last Name" name="lastName" type="text" />
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="Password" name="password" type="password" />
                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                  <button
                    disable={disableSubmit}
                    className="btn btn-dark mt-3"
                    type="submit"
                  >
                    Register
                  </button>
                  <button className="btn btn-danger mt-3 ml-3" type="reset">
                    Reset
                  </button>
                </Form>
              </div>
              <div className="col-md-7  my-auto">
                <img
                  className="img-fluid w-100 ml-3"
                  src={signUpImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
