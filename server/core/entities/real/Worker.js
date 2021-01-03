import Employee from "../abstract/Employee"

class Worker extends Employee {
    constructor(rank, detailsDone = 0) {
        super();
        this.details = detailsDone;
        this.rank = rank;
        this.type = "worker"
        // this.startDay = startDay
    }

    get Details() {return this.details}
    get Rank() {return this.rank}
    // getWorkedDays = () => {return ((+this.startDay)/1000/3600/24)}

}

export default Worker