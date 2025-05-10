import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Error from '../Routes/Error'
import Home from '../Routes/Home'

function App() {

return ( <div className='mr-6 ml-6 sm:mr-5 sm:ml-5 md:mr-10 md:ml-10'> 
<Router> 
  <Header/> 
    <Routes>
      <Route path="*" element={<Error/>}/>
      <Route path="/" element={<Home/>}/> 
    </Routes> 
  <Footer/> 
</Router> 
</div>
)

}

export default App