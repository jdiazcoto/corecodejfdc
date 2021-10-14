import { createStore } from "redux";

const store = createStore(() => ({
  accountLocal: [
    {
      id: 1,
      description: "HN-BANK ACCOUNT",
      product: "740199669",
      balance: "100",
    },
    {
      id: 2,
      description: "HN-BANK ACCOUNT",
      product: "740196989",
      balance: "31",
    },
    {
      id: 3,
      description: "HN-BANK ACCOUNT",
      product: "740178956",
      balance: "7",
    },
    {
      id: 4,
      description: "HN-BANK ACCOUNT",
      product: "740114289",
      balance: "52010",
    },
    {
      id: 5,
      description: "HN-BANK ACCOUNT",
      product: "740199669",
      balance: "6799",
    },
  ],
  accountDollars: [
    {
      id: 1,
      description: "US-BANK ACCOUNT",
      product: "754015266",
      balance: "97",
    },
    {
      id: 2,
      description: "US-BANK ACCOUNT",
      product: "750996989",
      balance: "336",
    },
    {
      id: 3,
      description: "US-BANK ACCOUNT",
      product: "751429709",
      balance: "9",
    },
    {
      id: 4,
      description: "US-BANK ACCOUNT",
      product: "751678901",
      balance: "41260",
    },
    {
      id: 5,
      description: "US-BANK ACCOUNT",
      product: "757766889",
      balance: "9697",
    },
  ],
}));
