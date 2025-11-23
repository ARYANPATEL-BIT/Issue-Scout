import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Organizations from './pages/Organizations'
import OrganizationPage from './pages/OrganizationPage'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/organization" />} />

        <Route path='/organization' element={<Organizations />}></Route>

        <Route path='/organization/:orgId' element={<OrganizationPage />} />
      </Routes>
    </Router>
  )
}

export default App
