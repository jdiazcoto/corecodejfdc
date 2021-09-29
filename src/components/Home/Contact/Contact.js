import React from "react";
import addressImg from "../../../imgs/placeholder.svg";
import techImg from "../../../imgs/technology.svg";
import multImg from "../../../imgs/multimedia.svg";

const Contact = () => {
  return (
    <div className="container">
      <h2 className="my-4">Fill out the form</h2>
      <p className="lead">
        Please submit your information and we will follow up with you as soon as
        possible.
      </p>
      <div className="row align-items-center mt-5">
        <div className="col-lg-7">
          <form className="contact-form text-left">
            <div className="form-group mb-4">
              <label>
                Name<sup className="text-primary">&#10033;</sup>
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. John Smith"
                className="form-control"
              />
            </div>
            <div className="form-group mb-4">
              <label>
                Company Email<sup className="text-primary">&#10033;</sup>
              </label>
              <input
                type="text"
                name="email"
                placeholder="name@company.com"
                className="form-control"
              />
            </div>
            <div className="form-group mb-4">
              <label>
                Subject<sup className="text-primary">&#10033;</sup>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Briefly describe your question"
                className="form-control"
              />
            </div>
            <div className="form-group mb-4">
              <label>
                Now let's hear the details
                <sup className="text-primary">&#10033;</sup>
              </label>
              <textarea
                name="message"
                placeholder="Let us know what you need"
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Send message"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
        <div className="col-lg-5 contact-details mt-5 mt-lg-0">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
