import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import GeneratorPage from './pages/GeneratorPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="one-page-dungeon" element={<GeneratorPage genType="one-page-dungeon"/>} />
        <Route path="perilous-shores" element={<GeneratorPage genType="perilous-shores" />} />
        <Route path="medieval-fantasy-city" element={<GeneratorPage genType="medieval-fantasy-city" />} />
        <Route path="neighborhood" element={<GeneratorPage genType="neighborhood"/>} />
        <Route path="mansion" element={<GeneratorPage genType="mansion"/>} />
        <Route path="village" element={<GeneratorPage genType="village"/>} />
        <Route path="cave" element={<GeneratorPage genType="cave"/>} />
        <Route path="compass-rose" element={<GeneratorPage genType="compass-rose"/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
