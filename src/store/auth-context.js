import React from "react";

const AuthContext = React.createContext({
  isSignedIn: false,
  signout: () => {},
  username: "",
  uid: "",
  token: ''
});

export default AuthContext;
