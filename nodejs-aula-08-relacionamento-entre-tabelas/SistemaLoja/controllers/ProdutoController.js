import express from 'express'
const router = express.Router();

import Produto from '../models/Produto.js'

// ROTA PRODUTOS
 router.get("/produtos",function(req,res){
//     const produtos = [
//         {nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis"},
//         {nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos"},
//         {nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores"},
//         {nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos"}
//     ]
    // Aqui iremos chamar o model "Cliente", invocar o método findAll() para buscar todos os registros da tabela clientes
    Produto.findAll().then(produtos => {
        res.render("produtos", {
            produtos : produtos
        })
    }).catch(error => {
        console.log("Erro ao buscar produtos: " + error);
        res.status(500).send("Erro ao buscar produtos");
    })
})
//ROTA DE CADASTRO DE PRODUTOS (subrota /cadastrar)
router.post("/produtos/cadastrar", function(req,res){
    // Pegando os dados do formulário de cadastro de produtos
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;
    // Criando um novo produto
    Produto.create({
        nome: nome,
        preco: preco,
        categoria: categoria
    }).then(() => {
        res.redirect("/produtos");
    }).catch(error => {
        console.log("Erro ao cadastrar produto: " + error);
    });
});

// ROTA DE EXCLUSÃO DE PRODUTOS
router.get("/produtos/excluir/:id", function(req,res){
    // Capturando o parâmetro da rota
    const id = req.params.id;
    // Enviando o ID do cliente para apagar do banco de dados
    Produto.destroy({
        where: {
    //Bando //Parâmetro recebido
            id: id
        }
    //Sucesso
    }).then(() => {
        res.redirect("/produtos");
    //Falha
    }).catch(error => {
        console.log("Erro ao excluir produto: " + error);
    });
});
export default router;