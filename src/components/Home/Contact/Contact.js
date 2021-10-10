import React from "react";
import FormTitle from "./FormTitle";
import FormContent from "./FormContent";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <div className="container">
      <FormTitle />
      <div className="row align-items-center mt-5">
        <div className="col-lg-7">
          <FormContent />
        </div>
        <div className="col-lg-5 contact-details mt-5 mt-lg-0">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default Contact;
