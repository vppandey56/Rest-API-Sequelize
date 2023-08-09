const db = require("./db_config");
const Customer = db.customers;

function createCustomer(req, res) {
  if (
    !req.body.id ||
    !req.body.name ||
    !req.body.city ||
    !req.body.age ||
    !req.body.salary
  ) {
    return res.status(400).send({
      message: "No Data",
    });
  } else {
    const customerObject = {
      id: req.body.id,
      name: req.body.name,
      city: req.body.city,
      age: req.body.age,
      salary: req.body.salary,
    };
    Customer.create(customerObject)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}
//fetch all data
function findAllCustomers(req, res) {
  Customer.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}
function findCustomerById(req, res) {
  Customer.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}
function updateCustomer(req, res) {
  const newData = {
    id: req.body.id,
    name: req.body.name,
    city: req.body.city,
    age: req.body.age,
    salary: req.body.salary,
  };
  Customer.update(newData, {
    where: { id: req.body.id },
  })
    .then(() => {
      res.send("update data:" + req.body.id);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}
function deleteCustomer(req, res) {
  Customer.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.send("delete data by Id:" + req.params.id);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

module.exports = {
  createCustomer,
  findAllCustomers,
  findCustomerById,
  updateCustomer,
  deleteCustomer,
};
