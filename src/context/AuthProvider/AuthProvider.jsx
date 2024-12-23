import AuthContext from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // GOOGLE SIGNIN //
  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // REGISTER WITH EMAIL & PASSWORD //
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    googleSignin,
    registerUser,
  };

  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
