import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './components/body/Nav'
import Footer from './components/body/Footer'

import Home from './pages/Home'
import Account from './pages/Account'

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className="container">
        <br />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </main>
      <footer>
        <br />
        <Footer />
      </footer>
    </div>
  )
}

export default App
