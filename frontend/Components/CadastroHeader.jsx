import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

const CadastroHeader = () => {
  return (
    <header>
        <div className='container flex flex-row items-center justify-between md:justify-normal'>
            <img src={logo} alt="Logo CodeNexus" className='w-20 p-2'/>
            <div className='flex-initial ml-8'>
                <Link to="/" className='text-blue-700 hover:text-blue-800 '>Voltar</Link>
            </div>
        </div>
    </header>
  )
}

export default CadastroHeader
