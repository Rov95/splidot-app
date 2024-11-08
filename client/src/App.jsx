import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUpForm from './components/LoginSignUpForm'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignUpForm />} />
      </Routes>
    </Router>
  )
}

export default App
