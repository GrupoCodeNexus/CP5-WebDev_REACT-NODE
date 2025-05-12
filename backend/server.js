const express =require("express") //import modulo express. Framework web Node.js usado para criar aplicativos web e APIs de forma rápida
const cors =require("cors") // módulo cors (Cross-Origin Resource Sharing). O CORS é um mecanismo de segurança do navegador
const bodyParser = require("body-parser")  //é um middleware que analisa os corpos das requisições HTTP de entrada (como dados de formulário ou JSON) e os torna acessíveis através de req.body
const {v4:uuid} =require("uuid") // Importando uuid //A função v4 é responsável por gerar IDs universais únicos (UUIDs) 
const multer = require("multer"); // Para lidar com o upload de arquivos
const path = require("path"); // Para lidar com caminhos de arquivos
const fs = require('fs').promises; // Para operações assíncronas com o sistema de arquivos

const app = express();

// Porta de acesso
const Port = 3000;

app.use(cors())
app.use(bodyParser.json());


// Variáveis para os produtos/serviços 

let produtos = [];

// Pasta para armazenar as imagens enviadas
const UPLOAD_FOLDER = 'public/Imagens';

fs.mkdir(path.join(__dirname, UPLOAD_FOLDER), { recursive: true }).catch(console.error);

// Configuração do Multer para o upload de imagens
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, UPLOAD_FOLDER));
    },
    filename: (req, file, cb) => {
        const extensao = path.extname(file.originalname);
        cb(null, `${Date.now()}${extensao}`);
    }
});

const upload = multer({ storage: storage });
app.use('/public', express.static(path.join(__dirname, 'public')));


// Endpoint para upload de imagem
app.post('/upload-imagem', upload.single('imagemProduto'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Nenhum arquivo de imagem enviado.' });
    }
    const caminhoRelativo = `/public/Imagens/${req.file.filename}`;
    res.json({ caminhoDaImagem: caminhoRelativo });
});

// Endpoint para listar imagens disponíveis
app.get('/imagens-disponiveis', async (req, res) => {
    try {
        const diretorioImagens = path.join(__dirname, UPLOAD_FOLDER);
        const arquivos = await fs.readdir(diretorioImagens);
        const imagens = arquivos
            .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)) // Filtra apenas arquivos de imagem
            .map(file => ({
                nome: file,
                url: `/public/Imagens/${file}` // Monta a URL para acesso
            }));
        res.json(imagens);
    } catch (error) {
        console.error("Erro ao listar imagens:", error);
        res.status(500).json({ message: 'Erro ao carregar a lista de imagens.' });
    }
});


// LEMBRETE: Quando formos usar o servidor dentro do frontend/REACT...precisamos usar o AXIOS para comunicação dentro do nosso componente específico

// Produtos
app.post('/produtos',(req, res)=>{
    const { imagem,nomeBicicleta, descricao, valor} =req.body;

    if (!imagem || !nomeBicicleta || !descricao || !valor) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
    }
    const novoItem ={
        id:uuid(), 
        imagem, 
        nomeBicicleta, 
        descricao, 
        valor}

    produtos.push(novoItem);
    res.status(201).json(novoItem);
})

// Leitura dos produtos
app.get('/produtos', (req, res)=>{
    res.json(produtos)
})


// Uptade dos produtos

app.put('/produtos/:id', (req, res)=> {
    const produtoId = req.params.id;
    const { imagem, nomeBicicleta, descricao, valor}= req.body;

    // Verifica se os campos foram pree
    if (!imagem || !nomeBicicleta || !descricao || !valor) {
        return res.status(400).json({ erro: 'O campo é obrigatório. '});
    }
    const produtoIndex = produtos.findIndex(item => item.id === produtoId);
    if (produtoIndex === -1) {
        return res.status(404).json({error: 'O produto não foi encontrado.'});
    }
    produtos[produtoIndex] = { 
        id: produtoId,
        imagem,
        nomeBicicleta,
        descricao,
        valor};

    res.json(produtos[produtoIndex])
})

// Delete produto

app.delete('/produtos/:id', (req, res)=>{
    const produtoId =req.params.id;
    const inicioProduto =produtos.length; //Armazenar o tamanho inicial da array
    produtos = produtos.filter(item => item.id !== produtoId);

    if (produtos.length === inicioProduto) {
        return res.status(404).json({error: 'Produto não encontrado'});

    }
    res.status(204).send();
})



// Escuta da porta do servidor
app.listen(Port, ()=>{
    console.log(`Servidor Rodando na porta ${Port}`)
})