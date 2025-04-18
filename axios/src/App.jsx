import { Outlet, Link } from 'react-router-dom'

import './App.css'
import { Navbar } from './components/Navbar'

export function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
