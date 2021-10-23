const mysql = require('mysql');

exports.databaseCredentials = {
    host: "dbrodrigo.cu1mslwbrnct.sa-east-1.rds.amazonaws.com",
    database: "cliente",
    user: "rodrigojuniorj",
    password: "roro17JU",
    dialect: "mysql"
};
//Conectando no banco de dados
const { Sequelize, Model, DataTypes } = require('sequelize');
exports.sequelize = new Sequelize(
    exports.databaseCredentials.database,
    exports.databaseCredentials.user,
    exports.databaseCredentials.password,
    {
        host: exports.databaseCredentials.host,
        dialect: exports.databaseCredentials.dialect
    }
);

exports.Usuario = require('../models/cliente').init(exports.sequelize, Sequelize);
