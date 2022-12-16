import React, { useEffect, useContext, useState } from 'react'
import {ThemeContext} from '../context/ThemeContext'
import {Link, useNavigate} from 'react-router-dom'

import { UserAuth } from '../context/AuthContext'
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
function Login() {
    
    const {on} = useContext(ThemeContext)
    
    const {auth} = useContext(UserAuth)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const navigate = useNavigate()
   
    // If user is signed in it navigates to homepage
    // if the authstate is changing
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if(user){
            navigate('/')
        }
      })
  
    }, [])
    
    
    const handleSignin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        }
        catch(e) {
            setError(e.message)
        }
    }

    
    
    return (
        <section className={on ? "main dark" : "main light"}>
            <div className='container startUI'>
                <h2>Login to see your todos!</h2>
                <p>Don't have an account?</p>
                <p><Link to="/signup">Sign up for free!</Link></p>
            {error ? <h4 className="errorMessage">{error}</h4> : null}
            <input 
                name="email"
                type="email"
                value={email}
                placeholder="email"
                onChange={(e)=>setEmail(e.target.value)}
            />

            <label htmlFor='password'></label>
            <input 
                name="password"
                type="password"
                value={password}
                placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={handleSignin}>Login</button>


            </div>
        </section>
    )
}

export default Login