const Cliente = require("../models/Cliente");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  // Controller to list all clients and filter clients(name, city, state)
  async index(req, res) {
    const name = `%${req.query.name}%`;
    const city = `%${req.query.city}%`;
    const state = `%${req.query.state}%`;

    let filter = {};

    const getFilters = () => {
      switch (Object.keys(req.query).toString()) {
        case "name":
          filter = { name: { [Op.like]: name } };
          break;
        case "city":
          filter = { city: { [Op.like]: city } };
          break;
        case "state":
          filter = { state: { [Op.like]: state } };
          break;
        default:
          break;
      }
    };

    try {
      console.log(getFilters());
      const clientes = await Cliente.findAll({
        limit: 10,
        order: [["createdAt", "DESC"]],
        where: filter
      });

      if (!clientes) res.json({ error: "Not found clients save" });

      return res.json(clientes);
    } catch (err) {
      return res.json({ error: err });
    }
  },

  // Controller to show one client only
  async show(req, res) {
    try {
      const id = req.params.id;

      const cliente = await Cliente.findOne({ where: { id } });

      if (!cliente) res.json({ error: "Client not exists" });

      return res.json(cliente);
    } catch (err) {
      return res.json({ error: err });
    }
  },

  // Controller to create new client
  async store(req, res) {
    try {
      const cliente = await Cliente.create(req.body);

      return res.json(cliente);
    } catch (err) {
      return res.json({ error: "Client not created!" });
    }
  },

  // Controller to update client
  async update(req, res) {
    try {
      const id = req.params.id;

      if (!(await Cliente.findOne({ where: { id } })))
        return res.json({ error: "Client not found" });

      const cliente = await Cliente.update(req.body, { where: { id } });

      if (cliente) {
        const clienteUpdated = await Cliente.findOne({ where: { id } });

        return res.json(clienteUpdated);
      }
    } catch (err) {
      return res.json({ error: err });
    }
  },

  // Controller to delete client
  async destroy(req, res) {
    try {
      const id = req.params.id;

      if (!(await Cliente.findOne({ where: { id } })))
        return res.json({ error: "Client not exists" });

      await Cliente.destroy({ where: { id } });
      return res.json({ cliente: "Deleted" });
    } catch (err) {
      return res.json({ error: err });
    }
  }
};
