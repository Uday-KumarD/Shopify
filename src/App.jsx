import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import Shop from './pages/Shop'
import Cart from './components/Cart'
import About from './pages/About'
import { Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Search from './components/Search'

const App = () => {

  // state to manage the search term

  return (
    <>
    <Navbar/>
    <div className='container my-2'>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:id' element={<ProductDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App