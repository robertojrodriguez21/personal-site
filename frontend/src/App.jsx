import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './components/body/Nav'

import Home from './pages/Home'

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
