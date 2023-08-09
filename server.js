const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./db_config");

//create tabe if table is not exist
db.sequelize.sync();

const controller = require("./customer_controller");
app.get("/", function (req, res) {
  res.send("hello world");
});

//create a new customer
app.post("/customers/new", function (req, res) {
  controller.createCustomer(req, res);
});
//fetch all data
app.get("/customers", function (req, res) {
  controller.findAllCustomers(req, res);
});
//fetch one data by id
app.get("/customers/:id", function (req, res) {
  controller.findCustomerById(req, res);
});
// update data
app.put("/customers/update", function (req, res) {
  controller.updateCustomer(req, res);
});
//delete data
app.delete("/customers/:id", function (req, res) {
  controller.deleteCustomer(req, res);
});

app.listen(5051, () => {
  console.log("server is running");
});
