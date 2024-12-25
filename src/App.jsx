//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Kalmte from './pages/Kalmte'
import Gelassenheit from './pages/Gelassenheit'
import Serenity from './pages/Serenity'
import Header from './components/Header'
  
import './main.scss'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" index={true} /> */}
          <Route path="/" element={<Serenity />} />
          <Route path="/english" element={<Serenity />} />
          <Route path="/dutch" element={<Kalmte />} />
          <Route path="/german" element={<Gelassenheit />} />
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}

export default App
