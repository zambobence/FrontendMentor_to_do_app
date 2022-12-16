import { UserAuth } from "../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

import React, { useContext } from 'react'

function ProtectedRoute({children}) {
const {auth, user} = useContext(UserAuth)


    if (!user){
        return <Navigate to="/login" />
    } else {
        return children
    }
}

export default ProtectedRoute