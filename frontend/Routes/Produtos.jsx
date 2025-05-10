import React from 'react';
import speedometer from '../assets/speedometer.png';
import versatilidade from '../assets/versatilidade.png';
import resistente from '../assets/shield.png';
import carga from '../assets/efficiency.png';
import economia from '../assets/battery.png';
import praticidade from '../assets/project-management.png';

const Produtos = () => {
  return (
    <div className="bg-white py-12">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-8 mt-10">Conheça a bike</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-6 gap-6 items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full mb-2 flex items-center justify-center transition duration-200 hover:scale-110 hover:bg-blue-400">
              <img src={speedometer} alt="Velocidade" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm font-semibold text-animate">Velocidade</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full mb-2 flex items-center justify-center transition duration-200 hover:scale-110 hover:bg-blue-400">
              <img src={versatilidade} alt="Versátil" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm text-gray-700 font-semibold">Versátil</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full mb-2 flex items-center justify-center transition duration-200 hover:scale-110 hover:bg-blue-400">
              <img src={resistente} alt="Resistente" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm text-gray-700 font-semibold">Resistente</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full mb-2 flex items-center justify-center transition duration-200 hover:scale-110 hover:bg-blue-400">
              <img src={economia} alt="Carga Rápida" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm text-gray-700 font-semibold">Carga Rápida</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full mb-2 flex items-center justify-center transition duration-200 hover:scale-110 hover:bg-blue-400">
              <img src={carga} alt="Economia" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm text-gray-700 font-semibold">Economia</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 p-2 rounded-full mb-2 flex items-center justify-center transition duration-200 hover:scale-110 hover:bg-blue-400">
              <img src={praticidade} alt="Praticidade" className="max-w-full max-h-full" />
            </div>
            <span className="text-sm text-gray-700 font-semibold hover:text-blue-500">Praticidade</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative rounded-md">
          <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
            <img
              src="https://img.odcdn.com.br/wp-content/uploads/2024/01/segway-e-bike.webp"
              alt="Imagem da bike 1"
              className="w-full h-full object-cover"
            />
          </div>
          <a href=''>
            <button className="w-full bg-yellow-500 text-blue-900 transition duration-300 cursor-pointer font-bold py-3 rounded-md mt-4 hover:bg-blue-800 hover:text-yellow-400">
              Ver preço
            </button>
          </a>
        </div>

        <div className="relative rounded-md">
          <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
            <img
              src="https://img.odcdn.com.br/wp-content/uploads/2024/01/segway-e-bike.webp"
              alt="Imagem da bike 2"
              className="w-full h-full object-cover"
            />
          </div>
          <a href='#'>
            <button className='w-full bg-yellow-500 text-blue-900 transition duration-300 cursor-pointer border-3 border-blue-800 font-bold py-3 rounded-md mt-4 hover:bg-blue-800 hover:text-yellow-400 hover:border-yellow-400'>
              Ver mais
            </button>
          </a>
        </div>

        <div className="relative rounded-md">
          <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
            <img
              src="https://img.odcdn.com.br/wp-content/uploads/2024/01/segway-e-bike.webp"
              alt="Imagem da bike 3"
              className="w-full h-full object-cover"
            />
          </div>
          <a href=''>
            <button className="w-full bg-yellow-500 transition duration-300 cursor-pointer text-blue-900 font-bold py-3 rounded-md mt-4 hover:bg-blue-800 hover:text-yellow-400">
              Ver preço
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Produtos;