import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner/Banner'
import Posters from './Components/Posters/Posters'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Posters/>
    </div>
  )
}

export default App