/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useEffect } from 'react'

import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  getFirestore, collection, onSnapshot,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { app } from '../firebase'

const auth = getAuth(app)

const db = getFirestore(app)
const UserAuth = createContext()

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (authUser) => { setUser(authUser) });

  return (
    <UserAuth.Provider value={{ auth, user }}>
      {children}
    </UserAuth.Provider>
  )
}

export { AuthContextProvider, UserAuth, db }
