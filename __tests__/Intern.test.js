const Intern = require('../lib/intern')

// test of the Intern class

describe('Intern class', () => {
    describe('Instantiate class', () => {
        it('should create a new object of Intern', () => {
            const emp = new Intern('Joe', 67, 'test@email.com', 'Northwestern University');

            expect(emp).toEqual({name:'Joe', id:67, email:'test@email.com', school:'Northwestern University'});
        })
    })

    describe('getName', () => {
        it('should return the name of the Intern object', () => {
            const emp = new Intern('Joe', 67, 'test@email.com', 'Northwestern University');

            expect(emp.getName()).toEqual('Joe');
        })
    })

    describe('getID', () => {
        it('should return the ID of the Intern object', () => {
            const emp = new Intern('Joe', 67, 'test@email.com', 'Northwestern University');

            expect(emp.getID()).toEqual(67);
        })
    })

    describe('getEmail', () => {
        it('should return the email of the Intern object', () => {
            const emp = new Intern('Joe', 67, 'test@email.com', 'Northwestern University');

            expect(emp.getEmail()).toEqual('test@email.com');
        })
    })

    describe('getSchool', () => {
        it('should return the school name of the Intern object', () => {
            const emp = new Intern('Joe', 67, 'test@email.com', 'Northwestern University');

            expect(emp.getSchool()).toEqual('Northwestern University');
        })
    })

    describe('getRole', () => {
        it('should return the role default of the Intern object', () => {
            const emp = new Intern('Joe', 67, 'test@email.com', 'Northwestern University');

            expect(emp.getRole()).toEqual('Intern');
        })
    })

})