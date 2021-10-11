import AuthContext from "./auth-context";
import { auth } from "../services/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

const Console = (prop) => (
  console[Object.keys(prop)[0]](...Object.values(prop)), null // ➜ React components must return something
);

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  const register = (email, password) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password).catch(
      (err) => {
        console.log(err);
      }
    );
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscriber;
  }, []);

  const authContext = {
    currentUser,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
