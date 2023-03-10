import React, { useEffect, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { ThemeContext } from '../context/ThemeContext'
import { UserAuth } from '../context/AuthContext'

function Login() {
	const { on } = useContext(ThemeContext)

	const { auth } = useContext(UserAuth)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const navigate = useNavigate()

	// If user is signed in it navigates to homepage
	// if the authstate is changing
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				navigate('/')
			}
		})
	}, [])

	const handleLogin = async (event) => {
		event.preventDefault()
		try {
			await signInWithEmailAndPassword(auth, email, password)
		} catch (e) {
			setError(e.message)
		}
	}

	return (
		<section className={on ? 'main dark' : 'main light'}>
			<div className='container startUI'>
				<h2>Login to see your todos!</h2>
				<p>Don&apos;t have an account?</p>
				<p>
					<Link to='/signup' alt='link to sign up'>
						Sign up for free!
					</Link>
				</p>
				{error ? <h4 className='errorMessage'>{error}</h4> : null}
				<form onSubmit={handleLogin}>
					<input
						name='email'
						type='email'
						value={email}
						placeholder='email'
						onChange={(e) => setEmail(e.target.value)}
						aria-labelledby='email input field'
					/>
					<input
						name='password'
						type='password'
						value={password}
						placeholder='password'
						onChange={(e) => setPassword(e.target.value)}
						aria-labelledby='password input field'
					/>
					<button onClick={handleLogin} alt='login'>
						Login
					</button>
				</form>
			</div>
		</section>
	)
}

export default Login
