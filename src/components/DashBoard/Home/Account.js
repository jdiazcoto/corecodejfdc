import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddAccount from "./AddAcount";
import AccountDetails from "./AccountDetails";
const Account = () => {
  const accountlps = useSelector((state) => state.currencyToggle.value);
  const accountusd = useSelector((state) => state.currencyToggle.usd);

  return (
    <>
      <AddAccount />
      <div className="card mt-5">
        <AccountDetails balance={accountlps} />
      </div>
    </>
  );
};

export default Account;
