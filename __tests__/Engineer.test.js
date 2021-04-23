const Engineer = require('../lib/engineer')

describe('Engineer class', () => {
    describe('Instantiate class', () => {
        it('should create a new object of Engineer', () => {
            const emp = new Engineer('Mike', 34, 'test@email.com', 'testUser');

            expect(emp).toEqual({name:'Mike', id:34, email:'test@email.com', github:'testUser'});
        })
    })

    describe('getName', () => {
        it('should return the name of the Engineer object', () => {
            const emp = new Engineer('Mike', 34, 'test@email.com', 'testUser');

            expect(emp.getName()).toEqual('Mike');
        })
    })

    describe('getID', () => {
        it('should return the ID of the Engineer object', () => {
            const emp = new Engineer('Mike', 34, 'test@email.com', 'testUser');

            expect(emp.getID()).toEqual(34);
        })
    })

    describe('getEmail', () => {
        it('should return the email of the Engineer object', () => {
            const emp = new Engineer('Mike', 34, 'test@email.com', 'testUser');

            expect(emp.getEmail()).toEqual('test@email.com');
        })
    })

    describe('getGithub', () => {
        it('should return the github username of the Engineer object', () => {
            const emp = new Engineer('Mike', 34, 'test@email.com', 'testUser');

            expect(emp.getGithub()).toEqual('testUser');
        })
    })

    describe('getRole', () => {
        it('should return the role default of the Engineer object', () => {
            const emp = new Engineer('Mike', 34, 'test@email.com', 'testUser');

            expect(emp.getRole()).toEqual('Engineer');
        })
    })

})