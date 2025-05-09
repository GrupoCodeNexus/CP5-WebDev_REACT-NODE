import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from '../Components/Nav'
import Error from '../Routes/Error'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
