import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  lps: [
    {
      id: 1,
      description: "HN-BANK ACCOUNT",
      product: "740199669",
      balance: "666",
      currency: "LPS",
    },
    {
      id: 2,
      description: "HN-BANK ACCOUNT",
      product: "740196989",
      balance: "31",
      currency: "LPS",
    },
    {
      id: 3,
      description: "HN-BANK ACCOUNT",
      product: "740178956",
      balance: "7",
      currency: "LPS",
    },
    {
      id: 4,
      description: "HN-BANK ACCOUNT",
      product: "740114289",
      balance: "52010",
      currency: "LPS",
    },
    {
      id: 5,
      description: "HN-BANK ACCOUNT",
      product: "740199669",
      balance: "6799",
      currency: "LPS",
    },
  ],
  usd: [
    {
      id: 1,
      description: "US-BANK ACCOUNT",
      product: "754015266",
      balance: "97",
      currency: "USD",
    },
    {
      id: 2,
      description: "US-BANK ACCOUNT",
      product: "750996989",
      balance: "336",
      currency: "USD",
    },
    {
      id: 3,
      description: "US-BANK ACCOUNT",
      product: "751429709",
      balance: "9",
      currency: "USD",
    },
    {
      id: 4,
      description: "US-BANK ACCOUNT",
      product: "751678901",
      balance: "41260",
      currency: "USD",
    },
    {
      id: 5,
      description: "US-BANK ACCOUNT",
      product: "757766889",
      balance: "9697",
      currency: "USD",
    },
  ],
};

export const currencySlice = createSlice({
  name: "currencyToggle",
  initialState: { value: initialStateValue.lps },
  reducers: {
    lps: (state, action) => {
      state.value = initialStateValue.lps;
    },
    usd: (state) => {
      state.value = initialStateValue.usd;
    },
  },
});

export const { lps, usd } = currencySlice.actions;

export default currencySlice.reducer;
