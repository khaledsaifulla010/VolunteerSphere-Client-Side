import AuthContext from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadings, setLoadings] = useState(true);

  // GOOGLE SIGNIN //
  const googleSignin = () => {
    setLoadings(true);
    return signInWithPopup(auth, googleProvider);
  };

  // REGISTER WITH EMAIL & PASSWORD //
  const registerUser = (email, password) => {
    setLoadings(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LOGIN WITH EMAIL & PASSWORD

  const loginUser = (email, password) => {
    setLoadings(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // GET CURRENT USER //

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadings(false);
    });
  }, []);

  const authInfo = {
    googleSignin,
    registerUser,
    loginUser,
    user,
    loadings,
  };

  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
