import AuthContext from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useEffect, useState } from "react";
import axios from "axios";

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

      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("https://volunteer-sphere-server-side.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("Login Token", res.data);
            setLoadings(false);
          });
      } else {
        axios
          .post(
            "https://volunteer-sphere-server-side.vercel.app/logout",
            {},
            { withCredentials: true }
          )
          .then((res) => {
            console.log("logout", res.data);
            setLoadings(false);
          });
      }

      setLoadings(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // SIGN OUT USER //

  const signOutUser = () => {
    setLoadings(true);
    return signOut(auth);
  };

  const authInfo = {
    googleSignin,
    registerUser,
    loginUser,
    user,
    loadings,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
