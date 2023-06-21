import './App.css'
import Navbar from './components/Navbar'

// import Home from './components/Home'

import RoutesIndex from './routes/Index'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
