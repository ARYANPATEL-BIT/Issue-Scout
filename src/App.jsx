import { useState } from 'react'
import './App.css'
import Profile from './Component/Profile'
import Navbar  from './Component/Navbar'
import Search from './Component/Search'

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
