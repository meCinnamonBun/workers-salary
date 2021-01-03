import Employee from "../abstract/Employee"

class Engineer extends Employee {
    constructor(exp) {
        super(exp);
        this.exp = exp;
        this.type = "engineer"
        // this.startDay = startDay
    }

    get Exp() {return this.exp}
    // getWorkedDays = () => {return ((+this.startDay)/1000/3600/24)}

}

export default Engineer