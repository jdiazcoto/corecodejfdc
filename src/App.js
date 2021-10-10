import NavBar from "../src/components/Home/NavBar/NavBar";
import AuthProvider from "./context/AuthProvider";
function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
      </AuthProvider>
    </>
  );
}

export default App;
