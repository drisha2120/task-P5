
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Articles from './components/Articles'
import Tutorials from './components/Tutorials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Projects />
      <Gallery />
      <Articles />
      <Tutorials />
      <Newsletter />
      <Footer />
    </>
  )
}

function LoginPage() {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  )
}

function SignupPage() {
  return (
    <>
      <Navbar />
      <Signup />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
