import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
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

  const handleSignout = async () => {
    await signOut(auth)
    console.log('Sign out succesfull')
  }

  return (
    <header style={on ? { backgroundImage: `url(${darkBckg})` } : { backgroundImage: `url(${lightBckg})` }}>
      <div className="container">
        <div className="header-container flex">
          <h1><Link to="/">ToDo</Link></h1>
          <div className="iconCont">
            <img className="toggleLogo" onClick={toggleTheme} src={on ? lightLogo : moonLogo} />
            {user ? <img className="toggleLogo" src={signouticon} onClick={handleSignout} /> : null }
          </div>
        </div>
      </div>
    </header>
  )
}
