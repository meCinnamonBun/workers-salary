module.exports = class Employee {
    type = '';
    params = {}

    constructor(type, params) {
        this.type = type
        this.params = params
        // if (new.target === Employee) {
        //     throw new TypeError("Cannot construct Abstract instances directly");
        // }
    }
}