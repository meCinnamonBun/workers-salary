// import SalaryService from "../core/services/SalaryService";
var SalaryService = require('../core/services/SalaryService')

var express = require('express');
var router = express.Router();

// var test = 0;

router.get('/', async function(req, res, next) {
  // test++;
  const id = req.query["id"]

  console.log("Started")

  console.log("With: " + id)

  const service = new SalaryService();
  // console.log("Service created")

  const salary = await service.getSalary(id)
  // console.log("Salary gotten")

  res.send("Зарплата: " + salary);
});

module.exports = router;
