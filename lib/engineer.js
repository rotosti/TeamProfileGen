// import per se of parent class
const Employee = require("./employee");
// Engineer class definition, child of Employee class
class Engineer extends Employee {
    // class constructor
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // getter for returning github username
    getGithub() {
        return this.github;
    }
    // getter for role, override of parent
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;