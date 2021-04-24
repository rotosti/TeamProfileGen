// import per se of parent class
const Employee = require("./employee");
// Intern class definition, child of Employee class
class Intern extends Employee {
    // class constructor
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // getter for school name
    getSchool() {
        return this.school;
    }
    // getter for role
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;