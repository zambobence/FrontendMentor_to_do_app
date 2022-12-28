import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import darkBckg from '../img/bg-desktop-dark.jpg'
import lightBckg from '../img/bg-desktop-light.jpg'
import lightLogo from '../img/icon-sun.svg'
import moonLogo from '../img/icon-moon.svg'
import signouticon from '../img/icon-logout.png'
import { ThemeContext } from '../context/ThemeContext'
import { UserAuth } from '../context/AuthContext'

export default function Header(props) {
  const { on, toggleTheme } = useContext(ThemeContext)
  const { auth, user } = useContext(UserAuth)
  const navigate = useNavigate()

  const handleSignout = async () => {
    await signOut(auth)
    console.log('Sign out succesfull')
    navigate('/login')
  }

  return (
    <header style={on ? { backgroundImage: `url(${darkBckg})` } : { backgroundImage: `url(${lightBckg})` }}>
      <div className="container">
        <div className="header-container flex">
          <h1><Link to="/">ToDo</Link></h1>
          <div className="iconCont">
            <button type="button" onClick={toggleTheme} alt="change mode" className="invisibleBtn">
              <img className="toggleLogo" alt="change mode" src={on ? lightLogo : moonLogo} />
            </button>
            {user
              ? (
                <button type="button" onClick={handleSignout} className="invisibleBtn signoutBtn" alt="sign out">
                  <img className="toggleLogo" src={signouticon} alt="sign out" />
                </button>
              ) : null }
          </div>
        </div>
      </div>
    </header>
  )
}
