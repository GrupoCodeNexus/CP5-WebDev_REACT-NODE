import Noticias from './Noticias';
import Produtos from './Produtos';
import Contato from './contato';

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
          <button className='bg-yellow-500 transition duration-300 cursor-pointer font-bold py-2 px-4 rounded-full hover:bg-blue-800'>
            <a href='#' className='text-blue-900 no-underline transition duration-100 hover:text-yellow-400'>Faça o test ride</a>
          </button>
        </div>
      </div>
      <Produtos/>
      <Contato/>
      <Noticias />
    </>
  );
};

export default Home;