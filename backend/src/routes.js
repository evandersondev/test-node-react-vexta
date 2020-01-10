const express = require("express");
const routes = express.Router();

const ClienteControllers = require("./controllers/ClientesControllers");

routes.get("/clientes", ClienteControllers.index);
routes.get("/clientes/:id", ClienteControllers.show);
routes.post("/clientes", ClienteControllers.store);
routes.put("/clientes/:id", ClienteControllers.update);
routes.delete("/clientes/:id", ClienteControllers.destroy);

module.exports = routes;
