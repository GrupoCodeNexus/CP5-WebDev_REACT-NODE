import './index.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Error from '../Routes/Error'
import Home from '../Routes/Home'
import Cadastros from '../Routes/Cadastros'
import CadastroHeader from '../Components/CadastroHeader'
import Sobre from '../Routes/sobre'

function AppContent () {
  // Função para ocultar componente quando acessar uma página específica 
  const location =useLocation();
  const hideLayout = ['/cadastrarProduto'];
  const shouldHideLayout = hideLayout.includes(location.pathname);


return (
  <div className='mr-6 ml-6 sm:mr-5 sm:ml-5 md:mr-10 md:ml-10'> 
    {location.pathname === '/cadastrarProduto' ? <CadastroHeader/> : <Header/> }
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Home/>}/> 
        <Route path="cadastrarProduto" element={<Cadastros/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
      </Routes> 
    {!shouldHideLayout && <Footer/>}
  </div>
  );
}

function App() {

return ( 
  <Router> 
    <AppContent/>
  </Router> 
  )
}

export default App