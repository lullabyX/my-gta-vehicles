import React from "react";

const AuthContext = React.createContext({
  isSignedIn: false,
  signout: () => {},
  username: "",
});

export default AuthContext;
