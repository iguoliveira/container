import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from "./routes/Homepage"
import { CharsList } from "./routes/CharsList"
import { TierList } from "./routes/TierList"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tierList/" element={<TierList />} />
        <Route path="/charsList/" element={<CharsList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)