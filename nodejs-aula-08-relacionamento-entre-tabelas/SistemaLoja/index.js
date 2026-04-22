// Importando o Express
//const express = require("express")
// Iniciando o Express 
import express from 'express'
// Importando o Controller de Cliente (aonde estão as rotas)
import ClienteController from './controllers/ClienteController.js'
import ProdutoController from './controllers/ProdutoController.js'
import PedidoController from './controllers/PedidoCOntroller.js '
// Importando o arquivo de coneção com o banco
import connection from './config/sequelize-config.js'
// Importando os Models
import Cliente from './models/Cliente.js'
import Pedido from './models/Pedido.js'
// Importando as associações
import associations from './config/associations.js'
// Realizando a conexão com o banco de dados
connection.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizada com sucesso!")
    })
    .catch((error) => {
        console.error(`Erro ao conectar com o banco de dados:", ${error}`);
    });

    connection.query("CREATE DATABASE IF NOT EXISTS loja_relacional;")
    .then(() => {
        console.log("O banco de dados 'loja_relacional' foi criado!")
    })
    .catch((error) => {
        console.error(`Ocorreu um erro ao criar o banco de dados:", ${error}`);
    });
// Invocando a funcção que cria as associações
associations()

// Sincronizando os Models de Cliente e Pedido
Promise.all([
    Cliente.sync({force: false}),
    Pedido.sync({force: false})
])
.then(() => {
    console.log("Tabelas Cliente e Pedido criadas e relacionadas com sucesso!")
})
.catch((error) => {
    console.error(`Ocorreu um erro ao sincronizar os Models ${error}`);
});

    
const app = express() 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))
// Configurando o express para aceitar dados de formulários
app.use(express.urlencoded({extended: true}))

// Ativando o uso das ROTAS
app.use("/" , ClienteController)

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})





// ROTA PEDIDOS
app.use("/", PedidoController)
app.use("/", ProdutoController)

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})