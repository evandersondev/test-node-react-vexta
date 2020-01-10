const Sequelize = require("sequelize");

const sequelize = new Sequelize("vexta", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
});

module.exports = {
  sequelize,
  Sequelize
};
