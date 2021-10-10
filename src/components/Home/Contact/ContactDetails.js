import React from "react";
import addressImg from "../../../imgs/placeholder.svg";
import techImg from "../../../imgs/technology.svg";
import multImg from "../../../imgs/multimedia.svg";

const ContactDetails = () => {
  return (
    <>
      <div className="box">
        <div className="icon d-flex align-items-end">
          <img src={addressImg} alt="" style={{ width: "8%" }} />
        </div>
        <h5>Address</h5>
        <p className="text-small font-weight-light">
          13/25 New Avenue, New Heaven, 45Y 73J, England, Great Britain
        </p>
      </div>
      <div className="box">
        <div className="icon d-flex align-items-end">
          <img src={techImg} alt="" style={{ width: "8%" }} />
        </div>
        <h5>Call center</h5>
        <p className="text-small font-weight-light">
          This number is toll free if calling from any country in central
          america
        </p>
        <strong className="text-muted">+504 5555 3333</strong>
      </div>
      <div className="box">
        <div className="icon d-flex align-items-end">
          <img src={multImg} alt="" style={{ width: "8%" }} />
        </div>
        <h5>Electronic support</h5>
        <p className="text-small font-weight-light">
          Please feel free to write an email to us.
        </p>
        <ul className="text-left">
          <li>
            <a href="mailto:info@fakeemail.com" className="text-small">
              jfdc69@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactDetails;
