import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import ImageGallery from './pages/Gallery'
import { Routes, Route } from 'react-router'
import Sermon from './pages/Sermon'
import Footer from './components/Footer'
import Events from './pages/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<ImageGallery/>}/>
      <Route path='/sermon' element={<Sermon/>}/>
      <Route path='/events' element={<Events/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
