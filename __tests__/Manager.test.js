const Manager = require('../lib/manager')

describe('Manager class', () => {
    describe('Instantiate class', () => {
        it('should create a new object of Manager', () => {
            const emp = new Manager('Remmy', 120, 'test@email.com', '312A');

            expect(emp).toEqual({name:'Remmy', id:120, email:'test@email.com', officeNumber:'312A'});
        })
    })

    describe('getName', () => {
        it('should return the name of the Manager object', () => {
            const emp = new Manager('Remmy', 120, 'test@email.com', '312A');

            expect(emp.getName()).toEqual('Remmy');
        })
    })

    describe('getID', () => {
        it('should return the ID of the Manager object', () => {
            const emp = new Manager('Remmy', 120, 'test@email.com', '312A');

            expect(emp.getID()).toEqual(120);
        })
    })

    describe('getEmail', () => {
        it('should return the email of the Manager object', () => {
            const emp = new Manager('Remmy', 120, 'test@email.com', '312A');

            expect(emp.getEmail()).toEqual('test@email.com');
        })
    })

    describe('getOfficeNumber', () => {
        it('should return the office number of the Manager object', () => {
            const emp = new Manager('Remmy', 120, 'test@email.com', '312A');

            expect(emp.getOfficeNumber()).toEqual('312A');
        })
    })

    describe('getRole', () => {
        it('should return the role default of the Manager object', () => {
            const emp = new Manager('Remmy', 120, 'test@email.com', '312A');

            expect(emp.getRole()).toEqual('Manager');
        })
    })

})