import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import { setAuthHeader } from '@/service/customAxios';
import { setJwt } from '@/service/jwt';

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [authProfile, setAuthProfile] = useState(null);
  const auth = GetAuth();
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(token => {
          console.log({ token });
          setJwt(token);
          setAuthHeader(token);
          setAuthUser(user);
        });
      } else {
        setAuthUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        auth: auth,
        authUser,
        setAuthUser,
        authProfile,
        setAuthProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function GetAuth() {
  const [user, setUser] = useState(null);
  const handleUser = user => {
    console.log('Auth Changed', user);
    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    return () => unsubscribe();
  }, []);

  /* TBA: some log in and log out function that will also call handleUser */

  return { user };
}
