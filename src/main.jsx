import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import OnePageDugeon from './pages/OnePageDungeon'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="OnePageDungeon" element={<OnePageDugeon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
