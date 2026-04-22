//Importando o Express com ES6 Modules
import express from 'express';
// Método Router do Express para criar rotas de aplicação
const router = express.Router();

// Importando o Model de Cliente
import Cliente from '../models/Cliente.js'

// ROTA CLIENTES
router.get("/clientes",function(req,res){
    // const clientes = [
    //     {nome: "Ana Silva", cpf: "123.456.789-00", endereco: "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678"},
    //     {nome: "Pedro Almeida", cpf: "987.654.321-00", endereco: "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432"},
    //     {nome: "Marina Oliveira", cpf: "456.789.123-00", endereco: "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987"},
    //     {nome: "Rafael Santos", cpf: "321.654.987-00", endereco: "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321"}
    // ]

    // Aqui iremos chamar o model "Cliente", invocar o método findAll() para buscar todos os registros da tabela clientes
    Cliente.findAll().then(clientes => {
        res.render("clientes", {
            clientes : clientes
        })
    }).catch(error => {
        console.log("Erro ao buscar clientes: " + error);
        res.status(500).send("Erro ao buscar clientes");
    })
})
//ROTA DE CADASTRO DE CLIENTES (subrota /cadastrar)
router.post("/clientes/cadastrar", function(req,res){
    // Pegando os dados do formulário de cadastro de clientes
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;

    // Criando um novo cliente
    Cliente.create({
        nome: nome,
        cpf: cpf,
        endereco: endereco
    }).then(() => {
        res.redirect("/clientes");
    }).catch(error => {
        console.log("Erro ao cadastrar cliente: " + error);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/clientes/excluir/:id", function(req,res){
    // Capturando o parâmetro da rota
    const id = req.params.id;
    // Enviando o ID do cliente para apagar do banco de dados
    Cliente.destroy({
        where: {
    //Bando //Parâmetro recebido
            id: id
        }
    //Sucesso
    }).then(() => {
        res.redirect("/clientes");
    //Falha
    }).catch(error => {
        console.log("Erro ao excluir cliente: " + error);
    });
});

// ROTA DE EDIÇÃO DE CLIENTES
router.get("/clientes/editar/:id", function(req,res){
    const id = req.params.id;
    // Buscando cliente no banco
    Cliente.findByPk(id).then(cliente => {
        res.render("clienteEditar", {
            // Passando os dados do Cliente para a página
            cliente: cliente
        })
    })
})

// ROTA DE ALTERAÇÃO DE CLIENTE
router.post("/clientes/alterar/", (req, res) => {
    // Coletando os dados do formulario
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    const id = req.body.id;

    // Atualizando o cliente no banco
    Cliente.update({
        nome: nome,
        cpf: cpf,
        endereco: endereco
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/clientes");
    }).catch(error => {
        console.log("Erro ao alterar cliente: " + error);
    });
});

// Exportando o módulo para usá-lo em outro arquivo
export default router;