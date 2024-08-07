import React from 'react'
import Nav from './components/Layout/Nav'
import Router from './Router/Router'
import './App.css'
function App() {
  return (
    <div className='w-[100vw] h-[100vh] m-0 p-0'>
         <Nav/>
         <Router/>
    </div>
  )
}

export default App
