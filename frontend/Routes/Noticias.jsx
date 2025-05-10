import React from 'react'

const Noticias = () => {
  return (
    <>
    <h1 className='text-2xl font-bold mb-4 mt-10'>Noticias</h1>
    <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='rounded-md relative overflow-hidden'>
        <div className='relative'>
          <img src='https://img.odcdn.com.br/wp-content/uploads/2024/01/segway-e-bike.webp' alt='noticia-1' className='w-full rounded h-auto aspect-video object-cover bg-blue-300'/>
            <small className='text-blue-600'>Leitura 5 min</small>
            <h2 className='font-semibold'>Impacto das bikes elétricas no trânsito</h2>
            <a href='#' className='text-yellow-500'>Leia mais</a>
          <div className='absolute top-2 right-2 bg-blue-600 text-white rounded-full w-12 h-12 flex flex-col items-center justify-center'>
            <span className='text-sm font-semibold'>25</span>
            <span className='text-xs uppercase'>Fev</span>
          </div>
        </div>
      </div>

      <div className='rounded-md relative overflow-hidden'>
        <div className='relative'>
          <img src='https://img.odcdn.com.br/wp-content/uploads/2024/01/segway-e-bike.webp' alt='noticia-1' className='w-full rounded h-auto aspect-video object-cover bg-blue-300'/>
            <small className='text-blue-600'>Leitura 4 min</small>
            <h2 className='font-semibold'>Quebrando barreiras: Bicicletas Elétricas!</h2>
            <a href='#' className='text-yellow-500'>Leia mais</a>
          <div className='absolute top-2 right-2 bg-blue-600 text-white rounded-full w-12 h-12 flex flex-col items-center justify-center'>
            <span className='text-sm font-semibold'>07</span>
            <span className='text-xs uppercase'>Jan</span>
          </div>
        </div>
      </div>

      <div className='rounded-md relative overflow-hidden'>
        <div className='relative'>
          <img src='https://img.odcdn.com.br/wp-content/uploads/2024/01/segway-e-bike.webp' alt='noticia-1' className='w-full rounded h-auto aspect-video object-cover bg-blue-300'/>
            <small className='text-blue-600'>Leitura 7 min</small>
            <h2 className='font-semibold'>Como saber se a sua rotina é bicicletável?</h2>
            <a href='#' className='text-yellow-500'>Leia mais</a>
          <div className='absolute top-2 right-2 bg-blue-600 text-white rounded-full w-12 h-12 flex flex-col items-center justify-center'>
            <span className='text-sm font-semibold'>22</span>
            <span className='text-xs uppercase'>Set</span>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Noticias
