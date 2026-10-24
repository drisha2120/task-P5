
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase'

function Signup() {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async (event) => {
    event.preventDefault()
    setMessage('')

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      setMessage('Please fill in all fields.')
      return
    }

    if (password.length < 6) {
      setMessage('Password must contain at least 6 characters.')
      return
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }

    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      )

      await setDoc(doc(db, 'users', userCredential.user.uid), {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim()
      })

      alert('Account created successfully!')
      navigate('/login')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('This email is already registered.')
      } else if (error.code === 'auth/invalid-email') {
        setMessage('Please enter a valid email address.')
      } else if (error.code === 'auth/weak-password') {
        setMessage('Please choose a stronger password.')
      } else {
        setMessage('Signup failed. Please try again.')
        console.error('Signup error:', error)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Join the DEV@Deakin community
        </p>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block mb-1 font-medium">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-1 font-medium">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={6}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1 font-medium"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Confirm your password"
            />
          </div>

          {message && (
            <p className="text-red-600 text-sm" role="alert">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white rounded-lg p-3 hover:bg-teal-700 disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-teal-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
