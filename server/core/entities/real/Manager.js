import Employee from "../abstract/Employee"

class Manager extends Employee {
    constructor(projectDone) {
        super();
        this.projectsNum = projectDone;
        this.type = "manager"
        // this.startDay = startDay
    }

    get ProjectsNum() {return this.projectsNum}
    // getWorkedDays = () => {return ((+this.startDay)/1000/3600/24)}

}

export default Manager