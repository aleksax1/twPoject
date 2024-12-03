import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './page/homaPage/homaPage'
import AboutUs from './page/aboutUs/aboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
