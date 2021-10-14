import NavBar from "../src/components/Home/NavBar/NavBar";
import AuthProvider from "./context/AuthProvider";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider>
        <AuthProvider>
          <NavBar />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
