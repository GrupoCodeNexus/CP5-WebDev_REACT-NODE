
import { useEffect, useState } from "react"
import axios from 'axios'


// Página área do Colaborador {cadastro, edição e exclusão de produtos}


const Cadastros = () => {

    // Declarando a URL de consumo
    const API_URL = 'http://localhost:3000/produtos';

    // Declarando HOOks para manipular o estado das variaveis
    const [produtos, setProdutos] =useState([]);
    const [novoProduto, setNovoProduto] =useState({imagem:'',nomeBicicleta:'',descricao:'',valor:''});
    const [editar, setEditar] =useState(false);

    // Cadastrar produto
    const cadastrarProduto =async()=>{
        if( !imagem || !nomeBicicleta || !descricao || !valor){
            alert("Campo obrigatório")
            return;
        }
        // Tratamento de erro com Try/catch
        try{
            const response = await axios.post(API_URL, novoProduto);
            setProdutos([...produtos, response.data])
            setNovoProduto({imagem:'',nomeBicicleta:'',descricao:'',valor:''})
            setEditar(false)

        }
        catch(error){
            console.log("Erro ao criar um produto", error)
        }
    }

    // Listar os produtos cadastrados
    useEffect(()=>{
        consultarProdutos();
    }, [])


    // Consultar produtos
    const consultarProdutos =async()=> {
        try{
            const response = await axios.get(API_URL)
            setProdutos(response.data);
        }catch(error){
            console.log("Produtos não encontrados", error)
        }
    }

  return (
    <div>
      {/* 
      
      Criar um formulário para página de cadastro dos Produtos
      
      A ideia aqui é você clicar em um Botão 'cadastrar novo produto' e o formulário de
    cadastro vai aparecer
      
      
      */}
    </div>
  )
}

export default Cadastros
