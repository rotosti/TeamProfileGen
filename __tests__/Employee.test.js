const Employee = require('../lib/employee');

// test of the Employee class

describe('Employee class', () => {
    describe('Instantiate class', () => {
        it('should create a new object of Employee', () => {
            const emp = new Employee('Jeb', 12, 'test@email.com')

            expect(emp).toEqual({name:'Jeb', id:12, email:'test@email.com'})
        })
    })

    describe('getName', () => {
        it('should return the name of the Employee object', () => {
            const emp = new Employee('Jeb', 12, 'test@email.com');

            expect(emp.getName()).toEqual('Jeb');
        })
    })

    describe('getID', () => {
        it('should return the ID of the Employee object', () => {
            const emp = new Employee('Jeb', 12, 'test@email.com');

            expect(emp.getID()).toEqual(12);
        })
    })

    describe('getEmail', () => {
        it('should return the email of the Employee object', () => {
            const emp = new Employee('Jeb', 12, 'test@email.com');

            expect(emp.getEmail()).toEqual('test@email.com');
        })
    })

    describe('getRole', () => {
        it('should return the role default of the Employee object', () => {
            const emp = new Employee('Jeb', 12, 'test@email.com');

            expect(emp.getRole()).toEqual('Employee');
        })
    })

})