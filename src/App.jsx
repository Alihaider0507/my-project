
import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Cards from './components/Cards'
import Productdetail from './components/Productdetail'


const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
    <Navbar/>
      <Home/>
      <Slider/>
      <Cards/>
      <Productdetail/>
      
      
    </div>
  )
}

export default App
