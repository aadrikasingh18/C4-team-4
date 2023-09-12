// src/contexts/AuthContext.js
import { auth, provider } from "firebase-config/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    return localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;
  });

  // Sign-up function
  async function signUp(email, password) {
    console.log(email, password);
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = await response.user;
    return user;
  }

  // Sign-in function
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Sign-out function
  function logOut() {
    return signOut(auth);
  }

  // Password reset function
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  async function signUpWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);

      console.log("Signed up with google:", result.user);
    } catch (error) {
      console.error("error signing up with google", error);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        localStorage.removeItem("currentUser");
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    resetPassword,
    logOut,
    signUpWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
