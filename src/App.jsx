import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Chatbot from './components/Chatbot'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/chatbot" element={<Chatbot/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
