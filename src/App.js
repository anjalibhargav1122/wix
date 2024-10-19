import React from 'react'
import Main from './pages/Main'
import Template from './pages/Template'
import { BrowserRouter, Routes, Route } from'react-router-dom'
import Wix from './pages/Wix'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/template" element={<Template/>}/>
        <Route path="/wix" element={<Wix/>}/>
        </Routes></BrowserRouter>
    </div>
  )
}

export default App