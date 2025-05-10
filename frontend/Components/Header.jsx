import React from 'react'
import logo from '../assets/logo.jpeg'

const Header = () => (
  <header>
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      
      {/* Logo à esquerda */}
      <img src={logo} className="w-20 p-2" alt="Logo" />
      
      {/* Navegação + Botão juntos */}
      <div className="flex items-center space-x-6">
        {/* Navegação */}
        <ul className="flex flex-row text-blue-700 space-x-4">
          <li>
            <a href="#" className="transition duration-300 hover:text-blue-900">Área do Colaborador</a>
          </li>
          <li>
            <a href="#" className="transition duration-300 hover:text-blue-900">Home</a>
          </li>
        </ul>

        {/* Botão */}
        <button className="cursor-pointer rounded-lg bg-yellow-500 px-4 py-2 transition duration-300 ease-in-out hover:scale-110 text-blue-800">
          Falar com o especialista
        </button>
      </div>
    </div>
  </header>
)

export default Header
