/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from './components/Layout/Nav'
import Router from './Router/Router'
import Footer from './components/Layout/Footer'
import './App.css'
function App() {
  return (
    <div className='w-[100vw] h-[100vh] m-0 p-0 overflow-x-hidden'>
         <Nav/>
         <Router/>
         <Footer/>
    </div>
  )
}

export default App
