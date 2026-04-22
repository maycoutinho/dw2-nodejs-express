import sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//criando o Model
// O método define() do sequelize cria uma tabela no BD
const Cliente = connection.define("clientes", {
    nome: {
        type: sequelize.STRING,
        allowNull: false,},
    cpf: {
        type: sequelize.STRING,
        allowNull: false,},
    endereco: {
        type: sequelize.STRING,
        allowNull: false,},
})
// método sync() sincroniza os dados com o banco
// force: false : não recria a tabela caso já exista

// Cliente.sync({force: false});

export default Cliente;