import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import ImageGallery from './pages/Gallery'
import { Routes, Route, useLocation } from 'react-router'
import Sermon from './pages/Sermon'
import Footer from './components/Footer'
import Events from './pages/Events'
import ContactForm from './pages/Contact'
import PrayerRequest from './pages/PrayerRequest'

function App() {
  const location = useLocation();

  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<ImageGallery/>}/>
      <Route path='/sermon' element={<Sermon/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/contact' element={<ContactForm/>}/>
      <Route path='/prayerRequest' element={<PrayerRequest/>}/>
    </Routes>
    {location.pathname !== "/events" && <Footer/>}
    </div>
  )
}

export default App
