import React from 'react'

const Noticias = () => {
  return (
    <>
    <h1 className='text-2xl font-bold mb-4'>Noticias</h1>
    <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='bg-blue-100 rounded-md shadow-md relative overflow-hidden'>
        <div className='relative'>
          <img src='#' alt='noticia-1' className='w-full h-auto aspect-video object-cover bg-blue-300'/>
            <small className='text-blue-600'>Leitura 5 min</small>
            <h2 className='font-semibold'>Impacto das bikes elétricas</h2>
            <a href='#' className='text-yellow-500'>Leia mais</a>
          <div className='absolute top-2 right-2 bg-indigo-400 text-white rounded-full w-12 h-12 flex flex-col items-center justify-center'>
            <span className='text-sm font-semibold'>25</span>
            <span className='text-xs uppercase'>Fev</span>
          </div>
        </div>
      </div>

      <div className='bg-blue-100 rounded-md shadow-md relative overflow-hidden'>
        <div className='relative'>
          <img src='#' alt='noticia-1' className='w-full h-auto aspect-video object-cover bg-blue-300'/>
            <small className='text-blue-600'>Leitura 5 min</small>
            <h2 className='font-semibold'>Impacto das bikes elétricas</h2>
            <a href='#' className='text-yellow-500'>Leia mais</a>
          <div className='absolute top-2 right-2 bg-indigo-400 text-white rounded-full w-12 h-12 flex flex-col items-center justify-center'>
            <span className='text-sm font-semibold'>25</span>
            <span className='text-xs uppercase'>Fev</span>
          </div>
        </div>
      </div>

      <div className='bg-blue-100 rounded-md shadow-md relative overflow-hidden'>
        <div className='relative'>
          <img src='#' alt='noticia-1' className='w-full h-auto aspect-video object-cover bg-blue-300'/>
            <small className='text-blue-600'>Leitura 5 min</small>
            <h2 className='font-semibold'>Impacto das bikes elétricas</h2>
            <a href='#' className='text-yellow-500'>Leia mais</a>
          <div className='absolute top-2 right-2 bg-indigo-400 text-white rounded-full w-12 h-12 flex flex-col items-center justify-center'>
            <span className='text-sm font-semibold'>25</span>
            <span className='text-xs uppercase'>Fev</span>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Noticias
