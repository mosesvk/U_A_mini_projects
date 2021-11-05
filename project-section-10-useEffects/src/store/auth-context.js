import React, { createContext } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}
})

export default AuthContext;