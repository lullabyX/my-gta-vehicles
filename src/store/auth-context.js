import React from "react";

const AuthContext = React.createContext({
  isSignedIn: false,
  signout: () => {},
  FirebaseUI: <></>,
  user: {},
});

export default AuthContext;
