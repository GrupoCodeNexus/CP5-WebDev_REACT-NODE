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
        <div className='bg-gradient-to-r from-blue-950 to-blue-800 py-19'>
            <h1 className='text-gray-200 text-2xl md:text-3xl font-bold text-center'>
                Olá, Colaborador seja bem vindo!
            </h1>
            <p className='text-center text-sm font-semibold text-yellow-500'>
                Sistema Nexus Bike
            </p>
        </div>
    </header>
  )
}

export default CadastroHeader
