// src/contexts/AuthContext.js
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Sign-up function
  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // Sign-in function
  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // Sign-out function
  function signOut() {
    return auth.signOut();
  }

  // Password reset function
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
