import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import {Routes, Route, Navigate} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  
  
  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
                                    <ProtectedRoute>
                                      <Main/>
                                    </ProtectedRoute>
                                } />
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
