
import { useEffect, useState, useRef } from "react"
import axios from 'axios'

// Página área do Colaborador {cadastro, edição e exclusão de produtos}
const Cadastros = () => {
    const API_BASE_URL = 'http://localhost:3000'; // URL base da sua API backend
    const PRODUTOS_API_URL = `${API_BASE_URL}/produtos`;
    const UPLOAD_API_URL = `${API_BASE_URL}/upload-imagem`;
    const IMAGES_LIST_API_URL = `${API_BASE_URL}/imagens-disponiveis`;

    const [produtos, setProdutos] = useState([]);
    const [novoProduto, setNovoProduto] = useState({ imagem: '', nomeBicicleta: '', descricao: '', valor: '' });
    const [editar, setEditar] = useState(false);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    // Estados para o upload e seleção de imagem
    const [arquivoImagemSelecionada, setArquivoImagemSelecionada] = useState(null); // O arquivo File objeto
    const [previewImagem, setPreviewImagem] = useState(null); // URL para preview (data URL ou URL do servidor)
    const [imagensDisponiveis, setImagensDisponiveis] = useState([]); // Lista de {nome, url} do servidor
    const [mostrarListaImagensModal, setMostrarListaImagensModal] = useState(false); // Controla visibilidade do modal/lista
    const [feedbackUpload, setFeedbackUpload] = useState(''); // Mensagem de feedback do upload

    const inputFileRef = useRef(null); // Referência para o input de arquivo, para resetar

    // Carregar produtos e imagens disponíveis ao montar o componente (ou conforme necessário)
    useEffect(() => {
        consultarProdutos();
    }, []);

    // Função para buscar a lista de imagens do servidor
    const carregarImagensDisponiveis = async () => {
        try {
            setFeedbackUpload('Carregando lista de imagens...');
            const response = await axios.get(IMAGES_LIST_API_URL);
            setImagensDisponiveis(response.data || []);
            setFeedbackUpload('');
        } catch (error) {
            console.error("Erro ao carregar imagens disponíveis:", error);
            setFeedbackUpload('Falha ao carregar lista de imagens.');
            setImagensDisponiveis([]); // Limpa em caso de erro para evitar mostrar dados antigos
        }
    };

    // Manipulador para quando um arquivo é selecionado no input
    const handleSelecaoArquivo = (event) => {
        const file = event.target.files[0];
        if (file) {
            setArquivoImagemSelecionada(file);
            // Gera um preview local antes do upload
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImagem(reader.result); // Data URL para preview imediato
            };
            reader.readAsDataURL(file);
             setNovoProduto(prev => ({ ...prev, imagem: '' })); // Limpa URL de imagem existente se um novo arquivo for escolhido
            setFeedbackUpload(`Arquivo selecionado: ${file.name}`);
        } else {
             // Se o usuário cancelar a seleção, reverter para o preview da imagem atual (se houver)
            setArquivoImagemSelecionada(null);
            setPreviewImagem(novoProduto.imagem ? `${API_BASE_URL}${novoProduto.imagem}`: null);
            setFeedbackUpload('');
        }
    };

    // Função para fazer upload da imagem para o servidor
    const uploadImagemParaServidor = async (arquivo) => {
        if (!arquivo) return null;

        const formData = new FormData();
        formData.append('imagemProduto', arquivo); // 'imagemProduto' deve bater com o backend (Multer)

        try {
            setFeedbackUpload('Enviando imagem...');
            const response = await axios.post(UPLOAD_API_URL, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setFeedbackUpload('Imagem enviada com sucesso!');
            return response.data.caminhoDaImagem; // Backend retorna { caminhoDaImagem: '/Imagens/nome.jpg' }
        } catch (error) {
            console.error("Erro ao fazer upload da imagem:", error.response?.data?.message || error.message);
            setFeedbackUpload(`Falha no upload: ${error.response?.data?.message || error.message}`);
            return null;
        }
    };

     // Resetar formulário e estados relacionados à imagem
    const resetarFormularioEInputs = () => {
        setNovoProduto({ imagem: '', nomeBicicleta: '', descricao: '', valor: '' });
        setEditar(false);
        setMostrarFormulario(false);
        setArquivoImagemSelecionada(null);
        setPreviewImagem(null);
        setFeedbackUpload('');
        if (inputFileRef.current) {
            inputFileRef.current.value = ""; // Limpa o input de arquivo
        }
        setMostrarListaImagensModal(false);
    };

    // Cadastrar Produto
    const cadastrarProduto = async () => {
        const { nomeBicicleta, descricao, valor } = novoProduto;
        let urlImagemFinal = novoProduto.imagem; // Começa com a imagem selecionada da lista (se houver)

        if (!nomeBicicleta || !descricao || !valor) {
            alert("Nome, descrição e valor são obrigatórios.");
            return;
        }

        // Se um NOVO arquivo foi selecionado, faz o upload dele
        if (arquivoImagemSelecionada) {
            const caminhoImagemServidor = await uploadImagemParaServidor(arquivoImagemSelecionada);
            if (caminhoImagemServidor) {
                urlImagemFinal = caminhoImagemServidor;
            } else {
                // Não prossegue se o upload falhar e uma nova imagem era esperada
                return;
            }
        } else if (!urlImagemFinal && !editar) {
             alert("Por favor, selecione ou envie uma imagem para o produto.");
            return;
        }

        try {
            const produtoParaEnviar = { ...novoProduto, imagem: urlImagemFinal };
            const response = await axios.post(PRODUTOS_API_URL, produtoParaEnviar);
            setProdutos(prevProdutos => [...prevProdutos, response.data]);
            resetarFormularioEInputs();
        } catch (error) {
            console.error("Erro ao criar um produto:", error);
            alert(`Erro ao criar o produto: ${error.response?.data?.message || error.message}`);
        }
    };

    // Consultar produtos
    const consultarProdutos = async () => {
        try {
            const response = await axios.get(PRODUTOS_API_URL);
            setProdutos(response.data);
        } catch (error) {
            console.error("Produtos não encontrados:", error);
        }
    };

    // Alterar Produto
    const alterarProduto = async () => {
        const { id, nomeBicicleta, descricao, valor } = novoProduto;
         let urlImagemFinal = novoProduto.imagem;

        if (!nomeBicicleta || !descricao || !valor) {
            alert("Todos os campos são obrigatórios.");
            return;
        }

         if (arquivoImagemSelecionada) {  // Se houver uma nova imagem, faça o upload
             const caminhoImagemServidor = await uploadImagemParaServidor(arquivoImagemSelecionada);
            if (caminhoImagemServidor) {
                urlImagemFinal = caminhoImagemServidor;
            } else {
                 return; // Upload falhou, não prosseguir com a alteração
            }
         }
         // Se não há arquivoImagemSelecionada, urlImagemFinal já contém o valor atual (ou o selecionado da lista)

        try {
            const produtoParaEnviar = { ...novoProduto, imagem: urlImagemFinal };
            const response = await axios.put(`${PRODUTOS_API_URL}/${id}`, produtoParaEnviar);
            setProdutos(produtos.map(p => (p.id === id ? response.data : p)));
            resetarFormularioEInputs();
        } catch (error) {
            console.error("Erro ao atualizar o produto:", error);
            alert(`Erro ao atualizar o produto: ${error.response?.data?.message || error.message}`);
        }
    };

    // Deletar Produto
    const deletarProduto = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar este produto?")) {
            try {
                await axios.delete(`${PRODUTOS_API_URL}/${id}`);
                setProdutos(produtos.filter(p => p.id !== id));
            } catch (error) {
                console.error("Erro ao excluir um produto:", error);
                alert(`Erro ao deletar o produto: ${error.response?.data?.message || error.message}`);
            }
        }
    };

    // Preenche o formulário para edição
    const handleEditar = (produto) => {
        setNovoProduto(produto);
        setEditar(true);
        setMostrarFormulario(true);
         // Se a imagem do produto existir, define o preview com a URL do servidor
        setPreviewImagem(produto.imagem ? `${API_BASE_URL}${produto.imagem}` : null);
        setArquivoImagemSelecionada(null);  // Limpa seleção de arquivo anterior
        if (inputFileRef.current) {
             inputFileRef.current.value = "";
        }
        setFeedbackUpload('');
        setMostrarListaImagensModal(false);
    };

    // Submit do formulário (cadastrar ou alterar)
    const handleSubmit = (e)=> {
        e.preventDefault();
        if (editar) {
            alterarProduto();
        }else {
            cadastrarProduto();
        }
    };

    // Visibilidade do Formulário
      const toggleFormulario = () => {
        if (mostrarFormulario) {
            resetarFormularioEInputs(); // Limpa tudo se estiver fechando o formulário
        } else {
            setMostrarFormulario(true);
            setEditar(false); // Garante que está em modo de cadastro
             // Outros resets já são feitos em resetarFormularioEInputs, que será chamado se fechar
        }
    };

    // Ação ao clicar para escolher uma imagem (abre o modal/lista)
    const handleClickEscolherImagem = async () => {
        await carregarImagensDisponiveis(); // Sempre recarrega a lista ao abrir
        setMostrarListaImagensModal(true);
    };

    // Ação quando uma imagem existente é selecionada da lista/modal
    const handleSelecionarImagemExistente = (urlImagemServidor) => {
        setNovoProduto(prev => ({ ...prev, imagem: urlImagemServidor }));
        setPreviewImagem(`${API_BASE_URL}${urlImagemServidor}`);  // Mostra preview da imagem selecionada
        setArquivoImagemSelecionada(null); // Limpa qualquer arquivo selecionado no input file
         if (inputFileRef.current) {
            inputFileRef.current.value = "";
        }
        setMostrarListaImagensModal(false); // Fecha o modal
        setFeedbackUpload(`Imagem selecionada: ${urlImagemServidor.split('/').pop()}`);
    };

    // Constrói a URL completa da imagem para exibição
    const getUrlCompletaImagem = (caminhoRelativo) => {
        if (!caminhoRelativo) return null; // Ou uma imagem placeholder default
         if (caminhoRelativo.startsWith('http') || caminhoRelativo.startsWith('data:')) {
            return caminhoRelativo; // Já é uma URL completa ou data URL
        }
        return `${API_BASE_URL}${caminhoRelativo}`;
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={toggleFormulario}
                    className="bg-blue-800 transition duration-300 cursor-pointer my-6 text-amber-50 py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    {mostrarFormulario ? (editar ? 'Cancelar Edição' : 'Cancelar Cadastro') : 'Cadastrar Novo Produto'}
                </button>
            </div>

            {/* Formulário de Cadastro/Edição */}
            {mostrarFormulario && (
                <form onSubmit={handleSubmit} className="mb-8 px-8 pt-3.5 pb-7 bg-blue-200 border-3 border-blue-600 rounded-lg">
                    <h2 className="text-xl font-semibold text-blue-900 mb-6">{editar ? "Editar Produto" : 'Cadastrar Produto'}</h2>

                    {/* Seção da Imagem */}
                    <div className="mb-4 p-3 border border-blue-700 rounded-md">
                        <label className="block font-medium text-blue-950 mb-2">Imagem do Produto</label>
                        {/* Preview da Imagem */}
                        {previewImagem && (
                            <div className="mb-3 text-center">
                                <img src={getUrlCompletaImagem(previewImagem)} alt="Preview" className="max-h-80 w-auto inline-block border rounded object-contain" />
                            </div>
                        )}

                        {/* Input para upload de novo arquivo */}
                        <div className="mb-3">
                            <label htmlFor="imagemFile" className="block text-sm font-medium text-gray-700 mb-1">Carregar nova imagem:</label>
                            <input
                                type="file"
                                id="imagemFile"
                                accept="image/*"
                                ref={inputFileRef}
                                onChange={handleSelecaoArquivo}
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-300 hover:file:cursor-pointer"
                            />
                        </div>

                        {/* Botão para escolher imagem existente */}
                        <button
                            type="button"
                            onClick={handleClickEscolherImagem}
                            className="mb-2 bg-blue-700 transition duration-200 hover:bg-blue-900 hover:cursor-pointer text-white py-2 px-4 rounded-md text-sm"
                        >
                            Ou escolher imagem existente
                        </button>

                        {/* Feedback do Upload/Seleção */}
                        {feedbackUpload && <p className="text-sm text-gray-600 mt-1 ">{feedbackUpload}</p>}
                         {/* Campo oculto ou informativo mostrando a URL da imagem atualmente no estado */}
                        {novoProduto.imagem && !arquivoImagemSelecionada && (
                            <p className="text-xs text-gray-500 mt-1 ">
                                Imagem atual no formulário: {novoProduto.imagem.split('/').pop()}
                            </p>
                        )}
                    </div>


                    {/* Outros campos do formulário */}
                    <div className="">
                        <label htmlFor="nomeBicicleta" className="block font-medium text-blue-900"> Nome do produto*</label>
                        <input
                            type="text" id="nomeBicicleta" placeholder="Ex: Montain Bike"
                            value={novoProduto.nomeBicicleta}
                            onChange={(e) => setNovoProduto({ ...novoProduto, nomeBicicleta: e.target.value })}
                            className="mt-1 mb-6 px-2 pt-2 pb-1 border border-blue-700 rounded w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="descricao" className="block font-medium text-blue-900">Descrição do produto*</label>
                        <textarea
                            id="descricao" placeholder="Detalhe sobre o produto"
                            value={novoProduto.descricao}
                            onChange={(e) => setNovoProduto({ ...novoProduto, descricao: e.target.value })}
                            className="mt-1 mb-6 px-2 pt-2 pb-1 border border-blue-700 rounded w-full h-24"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="valor" className="block font-medium text-blue-900">Atribua o valor ao produto*</label>
                        <input
                            type="number" id="valor" placeholder="Ex: 2899.90" step="0.01"
                            value={novoProduto.valor}
                            onChange={(e) => setNovoProduto({ ...novoProduto, valor: e.target.value })}
                            className="mt-1 mb-6 px-2 pt-2 pb-1 border border-blue-700 rounded w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="cursor-pointer mb-4 bg-green-600 hover:bg-green-700 text-amber-50 px-4 py-2 rounded-md w-full md:w-auto"
                    >
                        {editar ? 'Salvar Alteração' : 'Cadastrar Produto'}
                    </button>
                    {editar && (
                        <button
                            type="button"
                            onClick={resetarFormularioEInputs} // Simplesmente reseta tudo ao cancelar edição
                            className="cursor-pointer md:ml-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md w-full md:w-auto"
                        >
                            Cancelar Edição
                        </button>
                    )}
                </form>
            )}

            {/* Modal/Lista de Imagens Disponíveis */}
            {mostrarListaImagensModal &&(
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-blue-900">Selecione uma Imagem Existente</h3>
                            <button onClick={() => setMostrarListaImagensModal(false)} className="text-gray-600 hover:text-gray-900 text-2xl">&times;</button>
                        </div>
                        {imagensDisponiveis.length > 0 ? (
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {imagensDisponiveis.map((img) => (
                                    <li key={img.url}
                                        onClick={() => handleSelecionarImagemExistente(img.url)}
                                        className="cursor-pointer border hover:border-blue-500 rounded-lg p-2 transition-all duration-150 ease-in-out transform hover:scale-105"
                                        title={`Selecionar: ${img.nome}`}
                                    >
                                        <img src={`${API_BASE_URL}${img.url}`} alt={img.nome} className="w-full h-32 object-cover rounded-md mb-1" />
                                        <p className="text-xs text-center truncate text-gray-700" title={img.nome}>{img.nome}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">Nenhuma imagem encontrada no servidor. Tente carregar uma nova.</p>
                        )}
                         <button
                            type="button"
                            onClick={carregarImagensDisponiveis}
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm"
                        >
                            Recarregar Lista
                        </button>
                    </div>
                </div>
            )}


            {/* Lista de Produtos Cadastrados */}
            <div className="p-6 bg-blue-300 rounded-lg">
                <h2 className="mb-6 text-2xl font-semibold text-blue-900">Produtos Cadastrados</h2>
                {produtos.length === 0 && !mostrarFormulario && (
                    <p className="text-gray-500">Nenhum produto cadastrado. Clique em "Cadastrar Novo Produto" para começar.</p>
                )}
                <ul className="list-none p-0 m-0">
                    {produtos.map(produto => (
                        <li key={produto.id} className="flex flex-col md:flex-row items-start md:items-center p-4 mb-4 bg-white rounded-xl shadow-lg last:mb-0">
                            <div className="flex-shrink-0 w-full md:w-32 h-32 md:h-auto mb-3 md:mb-0 md:mr-4">
                                <img
                                    src={getUrlCompletaImagem(produto.imagem) || `${API_BASE_URL}/Imagens/placeholder.png`} // Fallback para placeholder
                                    alt={produto.nomeBicicleta}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-grow min-w-0 mr-0 md:mr-4">
                                <strong className="block text-lg md:text-xl font-semibold text-blue-800 mb-1 truncate" title={produto.nomeBicicleta}>
                                    {produto.nomeBicicleta}
                                </strong>
                                <p className="text-sm text-gray-700 mb-2 line-clamp-2 md:line-clamp-3 leading-relaxed">
                                    {produto.descricao}
                                </p>
                                 <p className="text-md md:text-lg font-semibold text-blue-700">
                                    R$ {parseFloat(produto.valor || 0).toFixed(2).replace('.', ',')}
                                </p>
                            </div>
                            <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 flex-shrink-0 mt-3 md:mt-0 w-full md:w-auto">
                                <button
                                    onClick={() => handleEditar(produto)}
                                    className="flex-1 md:flex-none cursor-pointer bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:shadow-lg transition-colors duration-150 whitespace-nowrap"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => deletarProduto(produto.id)}
                                    className="flex-1 md:flex-none cursor-pointer bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:shadow-lg transition-colors duration-150 whitespace-nowrap"
                                >
                                    Remover
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Cadastros;