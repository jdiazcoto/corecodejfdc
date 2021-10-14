import NavBar from "../src/components/Home/NavBar/NavBar";
import AuthProvider from "./context/AuthProvider";
import { Provider } from "react-redux";
import store from "./store";
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
