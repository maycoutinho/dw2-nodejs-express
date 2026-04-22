//Importando o Express com ES6 Modules
import express from 'express';
// Método Router do Express para criar rotas de aplicação
const router = express.Router();

//importando os models
import Pedido from '../models/Pedido.js'
import Cliente from '../models/Cliente.js';



//rota pedidos
router.get("/pedidos",function(req,res){
//Fazendo INNER JOIN para trazer as informações do Cliente junto com as informações do Pedido
    Pedido.findAll({
        //include traz outras informações em uma tabela
        include:[
            {
                model: Cliente, //Inclui o modelo Cliente relacionado
                required: true, //Garante que somente pedidos com clientes relacionados sejam retornados
            }
        ]
    }).then(pedidos => {
        res.render("pedidos",{
            //Passando a lista de pedidos para  a página
            pedidos: pedidos
        })
    }).catch(error =>{
        console.log(`Ocorreu um erro ao listar pedidos.${error}` )
    });
});
// Exportando o módulo para usá-lo em outro arquivo
export default router;