import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './components/body/Nav'

import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
