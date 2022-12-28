import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
function Footer() {
    const {on} = useContext(ThemeContext)
  return (
    <footer className={on ? "dark" : "light"}>
        <p>Challenge by <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" alt="link to the challange">Frontend Mentor</a>. Coded by <a href="https://www.github.com/benceturbulence" alt="hyperlink to github page">benceturbulence</a></p>
    </footer>
  )
}

export default Footer