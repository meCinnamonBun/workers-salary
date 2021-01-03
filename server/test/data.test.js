var Calculator = require("../core/services/Calculator")
var Employee = require("../core/entities/abstract/Employee");
var SalaryService = require('../core/services/SalaryService')

test('Worker calc test', () => {
    let emp = new Employee("worker", {
        details: 6,
            rank: 2
    })
    let calc = new Calculator()

    expect(calc.calcSalary(emp)).toBe(1200)
})

test('Manager calc test', () => {
    let emp = new Employee("manager", {
        projects: 2
    })
    let calc = new Calculator()

    expect(calc.calcSalary(emp)).toBe(6000)
})

test('Engineer calc test', () => {
    let emp = new Employee("engineer", {
        experience: 6,
    })
    let calc = new Calculator()

    expect(calc.calcSalary(emp)).toBe(23400)
})

test('Salary test', async () => {
    const service = new SalaryService()
    const salary = await service.getSalary(1)
    expect(salary).toBe(20000)
})