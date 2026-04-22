import sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//criando o Model
// O método define() do sequelize cria uma tabela no BD
const Produto = connection.define("Produto", {
    nome: {
        type: sequelize.STRING,
        allowNull: false,},
    preco: {
        type: sequelize.DECIMAL(10, 2),
        allowNull: false,},
    quantidade: {
        type: sequelize.INTEGER,
        allowNull: false,},
})
// método sync() sincroniza os dados com o banco
// force: false : não recria a tabela caso já exista
Produto.sync({force: false});
export default Produto;