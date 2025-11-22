import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Component/Profile'
import Navbar  from './Component/Navbar'
import Search from './Component/Search'
import Card from './Component/Card'

function App() {
  return(
    <div>
      <Navbar />

      <Profile />

      <Search />

    </div>
  )
}

export default App
