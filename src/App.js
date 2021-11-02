import NavBar from "../src/components/Home/NavBar/NavBar";
import AuthProvider from "./context/AuthProvider";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./state/currencyToggle";

const store = configureStore({
  reducer: {
    currencyToggle: currencyReducer,
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <NavBar />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
