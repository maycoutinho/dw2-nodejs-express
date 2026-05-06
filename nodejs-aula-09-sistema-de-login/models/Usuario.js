import Sequelize from "sequelize"
import connection from "../config/sequelize-config.js"

// CRIANDO O MODEL DE USUSARIO
const Usuario = connection.define('usuarios', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Usuario.sync({force: false});

export default Usuario;