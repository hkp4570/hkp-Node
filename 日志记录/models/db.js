const {
    Sequelize
} = require('sequelize');
const {sqlLogger} = require("../logger");

const sequelize = new Sequelize('myschooldb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
    logging: (msg) => {
        sqlLogger.debug(msg);
    }, // 清除控制台日志
});

module.exports = sequelize;
