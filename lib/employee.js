// Employee class definition
class Employee {
    // class constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getter for returning name
    getName() {
        return this.name;
    }
    // getter for returning ID
    getID() {
        return this.id;
    }
    // getter for returning email
    getEmail() {
        return this.email;
    }
    // getter for returning the role of the employee
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;