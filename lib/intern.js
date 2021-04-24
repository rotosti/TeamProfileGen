// import per se of parent class
const Employee = require("./employee");
// Intern class definition, child of Employee class
class Intern extends Employee {
    // class constructor
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // returns the school info
    getSchool() {
        return this.school;
    }
    // returns the role
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;