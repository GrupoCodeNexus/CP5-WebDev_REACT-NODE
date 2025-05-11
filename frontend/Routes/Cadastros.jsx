
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
    const [mostrarFormulario, setMostrarFormulario] = useState(false); //Visibilidade do Formulário

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
            setMostrarFormulario(false) //Esconde o formulário após cadastrar

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

        // Alterar Produto
    const alterarProduto = async () => {
        if ( !imagem || !nomeBicicleta || !descricao || !valor) {
            alert("Todos os campos são obrigatórios");
            return;
        } try {
            const response = await axios.put(`${API_URL}/${novoProduto.id}`, novoProduto);
            setProdutos(produtos.map(produto => (produto.id === novoProduto.id ? response.data : produto)));
            setNovoProduto({id: null, imagem: '', nomeBicicleta: '', descricao:'', valor:''});
            setEditar(false);
            setMostrarFormulario(false);

        } catch (error){
            console.log("Erro ao atualizar o produto", error);
            alert("Erro ao atualizar o produto")
        }
    }

        //DELETAR PRODUTO
    const deletarProduto = async (id)=>{
        if (window.confirm("Tem certeza que deseja deletar este produto?")) {
            try {
              await axios.delete(`${API_URL}/${id}`);
              setProdutos(produtos.filter((produto) => produto.id !== id));
            } catch (error) {
              console.log("erro ao excluir um produto", error);
                alert("Erro ao deletar o produto")
            }
          } else {
            console.log("Exclusão do produto cancelada.");
          }
    }

    // Preenche o formulário de novo para a edição
    const handleEditar = (produto) => {
        setNovoProduto(produto);
        setEditar(true);
        setMostrarFormulario(true);
    } 


    // Método submiti para atualizar o formulário entre cadastrar ou alterar
     const handleSubmit = (e) => {
        e.preventDefault();
        if (editar) {
            alterarProduto();
        }else {
            cadastrarProduto();
        }
     }

    //  Método de Visibilidade do Formulário
     const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
        setEditar(false);
        setNovoProduto({imagem:'', nomeBicicleta:'', descricao:'', valor:''}) //Limpar o formulário
     }

  return (

    <div className="container mx-auto p-4">
      {/* 
    Em baixo: Aparecera todos os produtos cadastrados um embaixo do outro, com um botão no final para editar ou excluir
      */}
      <div className="flex justify-between items-center mb-4">
        <button 
            onClick={toggleFormulario} 
            className="bg-yellow-400 transition duration-300 cursor-pointer my-6 text-amber-50 py-2 px-4 rounded-md hover:bg-yellow-500"
        >
            {mostrarFormulario && !editar? 'Cancelar' : (editar? 'Cancelar Edição': 'Cadastrar Novo Produto' )}
        </button>
      </div>

      {/* Formulário de cadastro */}

    {mostrarFormulario && (
        <form onSubmit={handleSubmit} className="mb-8 px-8 pt-3.5 pb-7 bg-gray-300 shadow rounded-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-6">{editar? "Editar Produto":'Cadastrar Produto'}</h2>
            <div className="">
                <label htmlFor="imagem" className="block font-medium text-blue-950">Selecione uma imagem</label>
                <input 
                    type="text"
                    id="imagem"
                    placeholder="Imagem"
                    value={novoProduto.imagem}
                    onChange={(e) => setNovoProduto({...novoProduto, imagem: e.target.value})} 
                    className="mt-1 mb-6 px-2 pt-2 pb-1 border rounded w-full" 
                />
            </div>
            <div className="">
                <label htmlFor="nomeBicicleta" className="block font-medium text-blue-950"> Nome do produto</label>
                <input 
                    type="text"
                    id="nomeBicicleta"
                    placeholder="Ex: Montain Bike"
                    value={novoProduto.nomeBicicleta}
                    onChange={(e) => setNovoProduto({...novoProduto, nomeBicicleta: e.target.value})}
                    className="mt-1 mb-6 px-2 pt-2 pb-1 border rounded w-full"
                    
                    />
            </div>
            <div>
                <label htmlFor="descricao" className="block font-medium text-blue-950">Descrição do produto</label>
                <textarea 
                    id="descricao"
                    placeholder="Detalhe sobre o produto"
                    value={novoProduto.descricao}
                    onChange={(e) => setNovoProduto({...novoProduto, descricao: e.target.value})}
                    className="mt-1 mb-6 px-2 pt-2 pb-1 border rounded w-full h-24"        
                />
            </div>
            <div className="mb-4">
                <label htmlFor="valor" className="block font-medium text-blue-950">Atribua o valor ao produto</label>
                <input 
                    type="number"
                    id="valor"
                    placeholder="Ex: 2899.90"
                    step="0.01"
                    value={novoProduto.valor}
                    onChange={(e) => setNovoProduto({...novoProduto, valor: e.target.value})}
                    className="mt-1 mb-6 px-2 pt-2 pb-1 border rounded w-full"
                />
            </div>
            <button
                type="submit"
                className="cursor-pointer mb-4 bg-yellow-400 hover:bg-yellow-500 text-amber-50 px-4 py-2 rounded-md w-full md:w-auto"
            >
                {editar? 'Salvar Alteração':'Cadastrar Produto'}
            </button>
            {editar &&(
                <button 
                    type="button"
                    onClick={() => {
                        setMostrarFormulario(false);
                        setEditar(false);
                        setNovoProduto({ imagem:'', nomeBicicleta:'', descricao:'', valor:''})
                    }}
                    className="ccursor-pointer mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md w-full md:w-auto"
                >
                    Cancelar Edição
                </button>
            )}

        </form>
    )}
    {/* Lista de produtos */}
    <div className="">
        <h2 className="">Produtos Cadastrados</h2>
        {produtos.length ==0 && !mostrarFormulario &&(
            <p className="text-gray-500">Nenhum produto cadastrado. Clique em "Cadastrar Novo Produto" para começar</p>
        )}
        <ul className="">
            {produtos.map(produto => (
                <li key={produto.id} className="">
                    <div className="">
                        {produto.imagem && (
                            <img src={produto.imagem} alt={produto.nomeBicicleta} className="" />
                        )}
                        <div>
                            <strong className="">{produto.nomeBicicleta}</strong>
                            <p className="">{produto.descricao}</p>
                            <p className="">R${parseFloat(produto.valor).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="">
                        <button
                            onClick={() => handleEditar(produto)}
                            className="bg-yellow-400 text-amber-50 hover:bg-yellow-500 cursor-pointer px-8 rounded-lg"
                        >
                            Editar
                        </button>
                        <button
                            onClick={() => deletarProduto(produto.id)}
                            className="bg-red-500 hover:bg-red-600 text-white cursor-pointer px-8 rounded-md" 
                        >
                            Remover
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </div>

    </div>
  )
}

export default Cadastros
