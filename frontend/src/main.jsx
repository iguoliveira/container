import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from "./routes/Homepage"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tierList/" element={<Homepage />} />
        <Route path="/charsList/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)