import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

import React, { useContext } from 'react'
import { UserAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { auth, user } = useContext(UserAuth)

  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}

export default ProtectedRoute
