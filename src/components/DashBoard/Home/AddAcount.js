import React from "react";
import { useDispatch } from "react-redux";
import { lps, usd } from "../../../state/currencyToggle";
import Modal from "react-modal";

const AddAcount = () => {
  const dispatch = useDispatch();

  const message = () => {
    console.log("Yellowwww mellowwww");
    dispatch(usd());
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="card m-3 ">
        <div className="d-flex">
          <button className="btn btn-outline-dark m-2">LPS</button>
          <button className="btn btn-outline-dark m-2" onClick={message}>
            USD
          </button>
          <button className="btn btn-outline-dark m-2">EUR</button>
          <button className="btn btn-outline-dark m-2">QTZ</button>
          <button className="btn btn-outline-dark m-2">ETH</button>

          <button className="btn btn-outline-danger m-2" onClick={openModal}>
            Add a new Account
          </button>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AddAcount;
