import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './components/body/Nav'
import Footer from './components/body/Footer'

import Home from './pages/Home'
import Account from './pages/Account'

const App = () => {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <header>
        <Nav />
      </header>
      <main className="container" style={{ flex: '1 0 auto' }}>
        <br />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </main>
      <footer style={{ flexShrink: '0' }}>
        <br />
        <Footer />
      </footer>
    </div>
  )
}

export default App
