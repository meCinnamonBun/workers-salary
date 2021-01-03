// import Calculator from "../db/Calculator";
var Calculator = require("./Calculator")
// import EmployeeFactory from "../factory/EmployeeFactory";
var Employee = require("../entities/abstract/Employee");
var DBWorker = require("../db/DBWorker");
var Mocker = require("../services/MockService")

const dataTemp = {
    name: "worker",
    params: {
        rank: 1,
        details: 10
    }
}

module.exports = class SalaryService {
    // employeeID = -1;
    calculator
    // #factory

    constructor() {
        this.calculator = new Calculator()
        // this.#factory = new EmployeeFactory()
    }

    getEmployee = async (employeeID) => {
        // console.log("Getting employee")

        var employee

        // const dbWorker = new DBWorker()
        const moker = new Mocker()

        // берем работника из БД (выбирая по employeeID)

        // const data = dataTemp;
        // const data = await dbWorker.doRequest(employeeID);
        const data = await moker.doRequest(employeeID);

        // employee = this.#factory.create(data);
        employee = new Employee(data.name, data.params);
        return employee
    }

    getSalary = async (employeeID) =>{
        // console.log("In salary service")
        const employee = await this.getEmployee(employeeID)
        return this.calculator.calcSalary(employee)
    }
}