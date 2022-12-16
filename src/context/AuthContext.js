import React from 'react'
import {createContext, useState, useEffect} from 'react'
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
} from "firebase/firestore";
import {app} from '../firebase'

const auth = getAuth(app)

const db = getFirestore(app)
const UserAuth = createContext()
function AuthContextProvider(props){


  const [user, setUser] = useState({})


  onAuthStateChanged(auth, (user) => { setUser(user)});
 
  return (
    <UserAuth.Provider value={{auth, user}}>
        {props.children}
    </UserAuth.Provider>
  )
}

export {AuthContextProvider, UserAuth, db}