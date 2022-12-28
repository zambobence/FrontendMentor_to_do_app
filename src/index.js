import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeContextProvider } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,

);
