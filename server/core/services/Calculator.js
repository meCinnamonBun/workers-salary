// считает зарплату
module.exports = class Calculator {
    constructor() {
        this.calculators = {
            worker: this.#workerSalary,
            manager: this.#managerSalary,
            engineer: this.#engineerSalary
        }
    }

    #workerSalary = (worker) =>{
        // console.log("In worker")
        return (worker.params.details * worker.params.rank * 100)
    }

    #managerSalary = (manager) => {
        return (manager.params.projects * 500 + 5000)
    }

    #engineerSalary = (engineer) => {
        return (7800 * 0.5 * engineer.params.experience)
    }

    calcSalary(employee){
        // console.log("Starting calculate")
        // console.log(employee)
        const workerType = employee.type;
        const calc = this.calculators[workerType](employee);

        if(calc === undefined) throw new Error("No such method or employee to calculate salary")
        else return calc;
    }
}
