import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Homepage from './Pages/Homepage'


function App() {
 

  return (
  <div className='App'>
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
    </Router>

  </div>
  )
}

export default App
