import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/Login'
import Signup from './components/Signup'
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
                                    <ProtectedRoute>
                                      <Main/>
                                    </ProtectedRoute>
                                } />
      </Routes>
    </div>
  );
}

export default App;
