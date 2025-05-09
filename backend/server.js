const express =require("express") //import modulo express. Framework web Node.js usado para criar aplicativos web e APIs de forma rápida
const cors =require("cors") // módulo cors (Cross-Origin Resource Sharing). O CORS é um mecanismo de segurança do navegador
const bodyParser = require("body-parser")  //é um middleware que analisa os corpos das requisições HTTP de entrada (como dados de formulário ou JSON) e os torna acessíveis através de req.body
const {v4:uuid} =require("uuid") // Importando uuid //A função v4 é responsável por gerar IDs universais únicos (UUIDs) 

const app = express();

// Porta de acesso
const Port = 3000;

app.use(cors)

app.use(bodyParser.json());


// Variáveis para os produtos/serviços 

// LEMBRETE: Quando formos usar o servidor dentro do frontend/REACT...precisamos usar o AXIOS para comunicação dentro do nosso componente específico






// Escuta da porta do servidor
app.listen(Port, ()=>{
    console.log(`Servidor Rodando na porta ${Port}`)
})