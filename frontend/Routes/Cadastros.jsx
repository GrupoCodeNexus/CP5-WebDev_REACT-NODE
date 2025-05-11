
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

    <div className="">
      {/* 
      Criar um formulário para página de cadastro dos Produtos
    Em baixo: Aparecera todos os produtos cadastrados um embaixo do outro, com um botão no final para editar ou excluir
      */}
      <header>
        {/* Logo, opção voltar
            Faixa de boas vindas
        */}
      </header>
      <div className="">
        <button 
            onClick={toggleFormulario} 
            className="bg-yellow-400 transition duration-300 cursor-pointer m-1 text-amber-50 py-1 px-2 rounded-full hover:bg-yellow-500"
        >
            {mostrarFormulario && !editar? 'Cancelar' : (editar? 'Cancelar Edição': 'Cadastrar Novo Produto' )}
        </button>
      </div>

      {/* Formulário de cadastro */}

    {mostrarFormulario && (
        <form onSubmit={handleSubmit} className="">
            <h2 className="">Cadastrar Produto</h2>
            <div className="">
                <label htmlFor="imagem" className="">Selecione uma imagem</label>
                <input 
                    type="text"
                    id="imagem"
                    value={novoProduto.imagem}
                    onChange={(e) => setNovoProduto({...novoProduto, imagem: e.target.value})} 
                    className=""
                />
            </div>
            <div className="">
                <label htmlFor="nomeBicicleta" className=""> Nome do produto</label>
                <input 
                    type="text"
                    id="nomeBicicleta"
                    value={novoProduto.nomeBicicleta}
                    onChange={(e) => setNovoProduto({...novoProduto, nomeBicicleta: e.target.value})}
                    className=""
                    
                    />
            </div>
            <div>
                <label htmlFor="descricao" className="">Descrição do produto</label>
                <textarea 
                    id="descricao"
                    value={novoProduto.descricao}
                    onChange={(e) => setNovoProduto({...novoProduto, descricao: e.target.value})}
                    className=""        
                />
            </div>
            <div>
                <label htmlFor="valor" className="">Atribua o valor ao produto</label>
                <input 
                    type="number"
                    id="valor"
                    placeholder="Ex: 2899.90"
                    step="0.01"
                    value={novoProduto.valor}
                    onChange={(e) => setNovoProduto({...novoProduto, valor: e.target.value})}
                    className=""
                />
            </div>
            <button
                type="submit"
                className=""
            >
            </button>

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

                </li>
            ))}
        </ul>
    </div>

    </div>
  )
}

export default Cadastros
