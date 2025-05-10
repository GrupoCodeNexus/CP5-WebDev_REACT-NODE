import React from 'react';
import Noticias from './Noticias';
import Produtos from './Produtos';
import Header from '../Components/Header'

const Home = () => {
  return (
    <>
      <div className='relative h-64 sm:h-80 md:h-96 w-auto mx-6 sm:mx-5 md:mx-10 rounded-md overflow-hidden'>
        <img
          src="https://img.odcdn.com.br/wp-content/uploads/2024/01/segway-e-bike.webp"
          alt="Sua nova companheira"
          className="w-full h-auto object-cover"
        />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-end justify-center p-8 text-right'>
          <h1 className='text-2xl font-bold text-white mb-2'>Sua nova companheira!</h1>
          <button className='bg-yellow-500 transition duration-300 cursor-pointer hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full'>
            <a href='#' className='text-white no-underline'>Faça o test ride</a>
          </button>
        </div>
      </div>
      <Produtos/>
      <Noticias />
    </>
  );
};

export default Home;