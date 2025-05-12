import React from 'react';
import speedometer from '../assets/speedometer.png';
import versatilidade from '../assets/versatilidade.png';
import resistente from '../assets/shield.png';
import carga from '../assets/efficiency.png';
import economia from '../assets/battery.png';
import praticidade from '../assets/project-management.png';
import { useEffect, useState} from 'react';
import axios from 'axios';

const Produtos = () => {

  // API de consumo
  const API_URL = 'http://localhost:3000';
  const PRODUTOS_API_URL = `${API_URL}/produtos`;
  const UPLOAD_FOLDER_NAME = 'public/Imagens'; // Nome da pasta de uploads no backend


  const [produtos, setProdutos] =useState([]);

  // Listar os produtos cadastrados
  useEffect(()=>{
      consultarProdutos();
  }, [])

  // Consultar produtos
  const consultarProdutos =async()=> {
      try{
          const response = await axios.get(PRODUTOS_API_URL)
          setProdutos(response.data);
      }catch(error){
          console.log("Produtos não encontrados", error)
      }
  }

  // Função para reconstruir a URL completa da imagem
  const getUrlCompletaImagem = (caminhoRelativo) => {
      if (!caminhoRelativo) return null; // Ou uma imagem placeholder default
      if (caminhoRelativo.startsWith('http') || caminhoRelativo.startsWith('data:')) {
          return caminhoRelativo; // Já é uma URL completa ou data URL
      }
      return `${API_URL}${caminhoRelativo}`;
  }

  return (
    <div className="bg-white py-12">

      {/* Caracteristicas dos produtos */}
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


      {/* Bikes cadastradas */}
       <div className="">
          <ul className="p-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {produtos.map(produto => (
                  <li key={produto.id} className="min-w-full">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                          <div className="relative">
                              {produto.imagem && (
                                  <img
                                    src={getUrlCompletaImagem(produto.imagem) || `${API_URL}/${UPLOAD_FOLDER_NAME}/placeholder.png`}
                                    alt={produto.nomeBicicleta}
                                    className="min-w-full h-48 object-cover rounded-t-lg" />
                              )}
                          </div>
                          <div className="p-4 flex flex-col justify-between h-full bg-blue-50">
                              <div>
                                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{produto.nomeBicicleta}</h2>
                                  <p className="text-gray-600 text-sm line-clamp-2">{produto.descricao}</p>
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                  <span className="text-lg font-bold text-blue-500">R$ {parseFloat(produto.valor).toFixed(2)}</span>
                                  <button className="cursor-pointer bg-blue-700 text-yellow-400 font-bold py-2 px-4 
                                  rounded-full text-sm transition duration-300 hover:text-blue-700 hover:bg-yellow-500">
                                      Ver Detalhes
                                  </button>
                              </div>
                          </div>
                      </div>
                  </li>
              ))}
          </ul>
        </div>
    </div>
  );
}
export default Produtos;