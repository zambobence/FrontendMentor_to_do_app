import React, { useContext, useState } from 'react'
import {ThemeContext} from '../context/ThemeContext'
import {Link, useNavigate} from 'react-router-dom'

import { UserAuth, db } from '../context/AuthContext'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, collection, addDoc} from "firebase/firestore";
function Signup() {

    const {auth} = useContext(UserAuth)
    const {on} = useContext(ThemeContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()


    const handleSignup = async () => {
    try {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate('/')

        // It creates  in the 
            // -> users - collection
                // -> the document of the user with the user uid
                    // -> and creates the todos - collection 
                        // -> and adds the first todo - as document

        const todoRef = collection(db, 'users', user.uid, 'todos')
        addDoc((todoRef), {
           task: "First task",
           done: false 
        }) 
    })}
    catch(e) {
        setError(e.message)
        console.log(e)
        }
    }
 
    







    return (
        <section className={on ? "main dark" : "main light"}>
            <div className='container startUI'>

            <h2>Sign up for free!</h2>
            <p>Already have an account?</p>
            <p><Link to="/login" alt="link to signin page">Sign in!</Link></p>
            <input 
                name="email"
                type="email"
                value={email}
                placeholder="email"
                onChange={(e)=>setEmail(e.target.value)}
                aria-labelledby="email input field"
            />

            <input 
                name="password"
                type="password"
                value={password}
                placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}
                aria-labelledby="password input field"
            />
            {error ? <h4 className="errorMessage">{error}</h4> : null}

            <button onClick={handleSignup}>Register</button>
            </div>
        </section>
    )
}

export default Signup