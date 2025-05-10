import React from 'react';
import speedometer from '../assets/speedometer.png';

const Produtos = () => {
  return (
    <div className="bg-white py-12">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">Conheça a bike</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-6 gap-6 items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full bg-gray-200 mb-2 flex items-center justify-center">
              <img src={speedometer} alt="Velocidade" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm text-gray-600">Velocidade</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full bg-gray-200 mb-2 flex items-center justify-center">
              <img src={speedometer} alt="Versátil" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm text-gray-600">Versátil</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full bg-gray-200 mb-2 flex items-center justify-center">
              <img src={speedometer} alt="Resistente" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm text-gray-600">Resistente</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full bg-gray-200 mb-2 flex items-center justify-center">
              <img src={speedometer} alt="Carga Rápida" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm text-gray-600">Carga Rápida</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full bg-gray-200 mb-2 flex items-center justify-center">
              <img src={speedometer} alt="Economia" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm text-gray-600">Economia</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full bg-gray-200 mb-2 flex items-center justify-center">
              <img src={speedometer} alt="Praticidade" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm text-gray-600">Praticidade</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative rounded-md shadow-md">
          <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
            <img
              src="https://img.odcdn.com.br/wp-content/uploads/2024/01/segway-e-bike.webp"
              alt="Imagem da bike 1"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="w-full bg-yellow-500 transition duration-300 cursor-pointer hover:bg-yellow-600 text-white font-bold py-3 rounded-md mt-4">
            Ver preço
          </button>
        </div>

        <div className="relative rounded-md shadow-md border-4 border-blue-600">
          <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
            <img
              src="https://img.odcdn.com.br/wp-content/uploads/2024/01/segway-e-bike.webp"
              alt="Imagem da bike 2"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="w-full bg-yellow-500 transition duration-300 cursor-pointer hover:bg-yellow-600 text-white font-bold py-3 rounded-md mt-4">
            Ver preço
          </button>
        </div>

        <div className="relative rounded-md shadow-md">
          <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
            <img
              src="https://img.odcdn.com.br/wp-content/uploads/2024/01/segway-e-bike.webp"
              alt="Imagem da bike 3"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="w-full bg-yellow-500 transition duration-300 cursor-pointer hover:bg-yellow-600 text-white font-bold py-3 rounded-md mt-4">
            Ver preço
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produtos;