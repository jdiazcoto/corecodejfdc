import React from "react";

const FormContent = () => {
  return (
    <>
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
    </>
  );
};

export default FormContent;
