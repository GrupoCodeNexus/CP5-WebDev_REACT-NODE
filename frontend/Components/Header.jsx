import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <div className="container mx-auto flex items-center justify-between px-6 py-4">

      <img src={logo} className="w-20 p-2" alt="Logo" />
      
      <div className="flex items-center space-x-6">
        <ul className="flex flex-row text-blue-700 space-x-4">
          <li>
            <Link to="/cadastrarProduto" className="transition duration-300 hover:text-blue-900">Área do Colaborador</Link>
          </li>
          <li>
            <Link to="/" className="transition duration-300 hover:text-blue-900">Home</Link>
          </li>
        </ul>

        <button className="cursor-pointer rounded-lg bg-yellow-500 px-4 py-2 transition duration-300 ease-in-out hover:scale-110 text-blue-800">
          Falar com o especialista
        </button>
      </div>
    </div>
  </header>
)

export default Header
