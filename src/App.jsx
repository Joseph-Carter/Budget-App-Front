import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './Components/NavBar'
import Homepage from './Pages/Homepage'
import NewTransaction from './Pages/NewTransaction'
import Show from './Pages/Show'
import Index from './Pages/Index'
import Editpage from './Pages/Editpage'


function App() {
 

  return (
  <div className='App'>
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/new" element={<NewTransaction />} />
          <Route path="transactions/:index" element={<Show />} />
          {/* <Route path="/transactions/:index/edit" element={<Editpage />} /> */}
          <Route path='/404' element={<Error />} />
        </Routes>
      </main>
    </Router>

  </div>
  )
}

export default App
