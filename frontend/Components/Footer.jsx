import React from 'react'
import logo from '../assets/logo.jpeg'

const Footer = () => {
  return (
    <>
    <footer className="bg-blue-900 text-gray-200 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src={logo} className='w-20 p-2 ml-5'/>

            <div className="redes-sociais">
                <h3 className="text-lg text-yellow-500 font-semibold mb-2">Contato</h3>
                <ul className="flex text-yellow-400 space-x-4 flex-wrap sm:flex-col sm:space-x-2">
                    <li><a href="#" className="transition duration-300 hover:text-yellow-600">Facebook</a></li>
                    <li><a href="#" className="transition duration-300 hover:text-yellow-600">Instagram</a></li>
                    <li><a href="#" className="transition duration-300 hover:text-yellow-600">Twitter</a></li>
                </ul>
            </div>

            <div className="text-blue-800 justify-center md:justify-start">
            <button className='cursor-pointer rounded-lg bg-yellow-500 pl-4 pr-4 p-2 transition delay-50 duration-300 ease-in-out hover:scale-105'>Falar com o especialista</button>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
