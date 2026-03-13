import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { BridgePage } from './pages/BridgePage'
import { CatalogPage } from './pages/CatalogPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BridgePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
