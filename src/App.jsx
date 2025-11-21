import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Component/Profile'
import Navbar  from './Component/Navbar'

function App() {
  return(
    <div>
      <Navbar />

      <Profile />

    </div>
  )
}

export default App
