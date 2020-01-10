const dbConfig = require("../database/dbCofing");

module.exports = dbConfig.sequelize.define("Clientes", {
  id: {
    type: dbConfig.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true
  },
  name: {
    type: dbConfig.Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: dbConfig.Sequelize.STRING,
    allowNull: true
  },
  state: {
    type: dbConfig.Sequelize.STRING,
    allowNull: true
  }
});
