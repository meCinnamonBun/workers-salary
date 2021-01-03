import Worker from "../entities/real/Worker";
import Engineer from "../entities/real/Engineer";
import Manager from "../entities/real/Manager";

//!!! реализовать абстрактную фабрику
class EmployeeFactory {
    constructor() {
        this.employees = {
            worker: this.#createWorker,
            manager: this.#createManager,
            engineer: this.#createEngineer
        }
    }

    #createWorker(params){
        return new Worker()
    }

    #createEngineer(params){
        return new Engineer()
    }

    #createManager(params){
        return new Manager()
    }

    create(data){
        const employeeType = data.name
        const employee = this.employees[employeeType]()

        if(employee === undefined) throw new Error("No such method to return employee")
        else return employee(employee);
    }
}

export default EmployeeFactory