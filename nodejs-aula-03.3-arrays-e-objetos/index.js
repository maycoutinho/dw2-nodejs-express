//O arquivo index.js é o arquivo principal do projeto

//importando o MÓDULO do express
const express = require("express");

//criando uma instancia de Express
const app = express();

//CONFIGURANDO O EJS
app.set('view engine','ejs')

//CRIANDO A ROTA PRINCIPAL DO SITE("/")
app.get("/", function (req, res) {
//   res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js<h1>");
     res.render("index")
});

//CRIANDO A ROTA DE PERFIL DO USUÁRIO
app.get("/perfil", function (req, res) {
//   res.send("<h2>Bem vindo ao seu perfil!</h2>");
     res.render("perfil") 
});
app.get("/clientes", function (req, res) {
//   res.send("<h2>Bem vindo ao seu perfil!</h2>");
     res.render("clientes") 
});


//Rota de produtos sem parametro
app.get("/produtos",(req,res)=>{
     const listaProdutos = ['Computador','Celular','tablet','Notebook'];
     res.render("produtos",{

          //Enviando variaveis para pagina html
          listaProdutos : listaProdutos
     })
})


// rota de produtos com parametro
app.get("/produtos/:produto",  (req, res) => {
     const produto = req.params.produto;
     res.render("detalhesProduto",{
          produto: produto
     }) ;
});


app.get("/servicos", (req, res) =>{

     const servicos = [
          {servico: "Desenvolvimento de Websites",descricao:"Criação de sites com Node.js e integração a banco de dados", preco:3500},
          {servico: "Auditoria de UX/UI",descricao:"Avaliação da usabilidade de sistemas com sugestões de melhoria", preco:1800},
          {servico: "Infraestrutura em Nuvem",descricao:"Confiiguração de servidores e hospedagem", preco:2900},
          {servico: "Chatbot com IA",descricao:"Desenvolvimento de Chatbot para atendimento automático", preco:2750},
     ]


     res.render("servicos",{
          // Enviando o array de objetos para a página
          servicos : servicos
     });
});

//Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log(
      `Servidor iniciado com sucesso no endereço: http://localhost:${port}`,
    );
  }
});
