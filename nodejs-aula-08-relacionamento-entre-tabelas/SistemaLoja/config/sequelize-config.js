// Importando a ORM Sequelize
import Sequelize from "sequelize";

// Definindo os dados de conecção com o banco de dados
const connection = new Sequelize({
    // Tipo do banco
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    timezone: "-03:00",
    database: "loja_relacional"
})
// Exportando o módulo
export default connection;