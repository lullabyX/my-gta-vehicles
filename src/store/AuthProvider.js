import { useEffect, useReducer } from "react";
import AuthContext from "./auth-context";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyAHoGaLz4HCNAViG8q6vUZnftEiTbD0kak",
  authDomain: "gta-owned-vehicles.firebaseapp.com",
  projectId: "gta-owned-vehicles",
  storageBucket: "gta-owned-vehicles.appspot.com",
  messagingSenderId: "276646147699",
  appId: "1:276646147699:web:78fdfccce6d086d7291c06",
  measurementId: "G-GLVS714QM5",
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

const defaultState = {
  isSignedIn: true,
  signout: () => {},
  FirebaseUI: (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  ),
  user: {},
};

const authReducer = (state, action) => {
  if (action.type === true) {
    return {
      isSignedIn: true,
      signout: state.signout,
      FirebaseUI: <></>,
      user: action.user,
    };
  }
  if (action.type === false)
  {
    return {...defaultState, isSignedIn: false}
  }
  return defaultState;
};
const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, defaultState);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch({
          type: !!user,
          user: user,
        });
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  const signout = async () => {
    dispatch({ type: false });
    await firebase.auth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        isSignedIn: state.isSignedIn,
        signout: signout,
        FirebaseUI: state.FirebaseUI,
        user: state.user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
