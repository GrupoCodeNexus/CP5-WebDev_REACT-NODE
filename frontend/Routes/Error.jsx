import React from 'react'
import { useNavigate } from 'react-router-dom'
import error from '../assets/Error.png'

const Error = () => {
  const navigate = useNavigate()

  return (
    <main className="flex items-center justify-center w-full relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <img
          src={error}
          alt="Error"
          className="w-full h-full object-cover transform scale-[1.25] transition-transform duration-500"
        />
      </div>

      <div className="relative z-10 text-center text-black px-4">
        <h2 className="text-7xl font-semibold ">Erro</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-50 mb-10 bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
          Voltar para Home
        </button>
      </div>
    </main>
  )
}

export default Error
