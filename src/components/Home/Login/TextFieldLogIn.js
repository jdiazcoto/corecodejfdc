import React from "react";

const TextFieldLogIn = ({ label, name, type, ref }) => {
  return (
    <div className="mb-2">
      <label>{label}</label>
      <input
        className="form-control shadow-none"
        label={label}
        name={name}
        type={type}
        ref={ref}
      />
    </div>
  );
};

export default TextFieldLogIn;
