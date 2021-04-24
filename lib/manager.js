// import per se of parent class
const Employee = require("./employee");
// Manager class definition, child of Employee
class Manager extends Employee {
    // class constructor
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // getter for  office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    // getter for role
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;