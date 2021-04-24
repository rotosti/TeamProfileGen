// imports of necessary parts to make functions
const inquirer = require('inquirer');
const fs = require('fs');
const htmlGenerator = require('./src/generateHTML')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
// lists for storing the several types of employees for future use
const managerList = [];
const engineerList = [];
const internList = [];
const idList = [];
const emailList = [];
// questions to ask if the user decides to add a new employee
const employeeGenerateQuestions = [{
    name: 'position',
    type: 'list',
    message: `What is the new employee's position?`,
    choices: ['Manager', 'Engineer', 'Intern']
}, {
    name: 'employeeName',
    type: 'input',
    message: `What is the new employee's name?`,
    // validation of the name entry, requires the name to be entered
    validate: ((name) => { 
        if (name !== '') {
            return true;
        } else {
            return 'A name must be entered.'
        }
    })
}, {
    name: 'employeeID',
    type: 'input',
    message: `What is the new employee's ID number?`,
    // validation to see if an employee ID has been entered already
    validate: ((id) => {
        if (id == '') return 'An employee ID must be entered.'
        if (idList.includes(id)) {
            return 'This ID already exists, enter a new Employee ID.';
        } else {
            return true;
        }
    })
}, {
    name: 'employeeEmail',
    type: 'input',
    message: `What is the new employee's email?`,
    // validation to see if given unique email and fix email syntax
    validate: ((email) => {
        let regex = /\S+@\S+\.\S+/; // regex email format
        if (regex.test(email)) { // if correct format is true
            if (emailList.includes(email)) { // check if email is unique in email list
                return 'This email already exists, enter a new unique email.';
            } else {
                return true;
            }
        } else {
            return `Incorrect email format, follow ____@____.____`;
        }
    })
}, {
    name: 'officeNumber',
    type: 'input',
    message: `What is the new employee's office number?`,
    when: answers => answers.position === 'Manager',
    // validation for unique office number
    validate: ((officeNum) => {
        if (officeNum == '') return 'An office number must be entered.'
        if (managerList.filter((mgr) => mgr.officeNumber === officeNum).length > 0) {
            return `The office is taken, assign new office.`;
        }
        return true;
    })
}, {
    name: 'github',
    type: 'input',
    message: `What is the new employee's GitHub username?`,
    when: answers => answers.position === 'Engineer',
    // verifying a unique username was received
    validate: ((gitUN) => {
        if (gitUN == '') return 'A username must be entered.';
        if (engineerList.filter((engi) => engi.github === gitUN).length > 0) {
            return `The GitHub user ID already exists, enter the employees correct GitHub user ID.`;
        }
        return true;
    })
}, {
    name: 'school',
    type: 'input',
    message: `What school is the new employee attending?`,
    when: answers => answers.position === 'Intern',
    //validating if something was entered for the school field
    validate: ((sch) => {
        if (sch == '') {
            return 'A school must be entered.'
        } else {
            return true;
        }
    })
}]
// question to ask if the user wants to quit or make a new employee
const continueOrQuitQuestion = {
    name: 'enterOrQuit',
    type: 'list',
    message: `What would you like to do?`,
    choices: ['Create a new employee.', 'Exit this application.'],
}

// initialization function, asks initial question whether the user wants to make a new employee or quit,
// uses inquirer to ask a question
function init() {
    // inquirer start
    inquirer
        // prompt function
        .prompt(continueOrQuitQuestion)
        // promise resolution
        .then((data) => {
            // if user decides to make a new employee
            if (data.enterOrQuit === 'Create a new employee.') {
                createNewEmployee(); // create new employee function call
            } else {
                // start termination process
                terminate();
            }
        })
}

// termination function, starts to end the application and functionality
function terminate() {
    // makes the HTML template string and stores it in a htmlData, calls the helper function in ./src
    let htmlData = htmlGenerator.generateHTML(managerList,engineerList,internList);
    // writes the file using the file system module of node, using the data stored in htmlData
    fs.writeFile('./dist/index.html', htmlData, (err) => {
        err ? console.error(err) : console.log('Successfully created HTML file.')
    })
    // end application
}

// employee object creation function
function createNewEmployee() {
    // launches inquirer to start generating employee decendant objects
    inquirer
        // starts of promise question asking with questions in the list above
        .prompt(employeeGenerateQuestions)
        // promise resolution
        .then((data) => {
            // checks to see what kind of employee was chosen by the user and makes the appropriate object
            switch (data.position) {
                // if selected employee type is manager
                case 'Manager':
                    // adds manager to manager list once the object is created
                    managerList.push(new Manager(
                        data.employeeName,
                        data.employeeID,
                        data.employeeEmail,
                        data.officeNumber));
                    idList.push(data.employeeID); // for future validation
                    emailList.push(data.employeeEmail) // for future validation
                    break;
                // if selected employee type is engineer
                case 'Engineer':
                    // adds engineer to engineer list once the object is created
                    engineerList.push(new Engineer(
                        data.employeeName,
                        data.employeeID,
                        data.employeeEmail,
                        data.github));
                    idList.push(data.employeeID); // for future validation
                    emailList.push(data.employeeEmail) // for future validation
                    break;
                // if selected employee type is intern
                case 'Intern':
                    // adds intern to intern list once the object is created
                    internList.push(new Intern(
                        data.employeeName,
                        data.employeeID,
                        data.employeeEmail,
                        data.school));
                    idList.push(data.employeeID); // for future validation
                    emailList.push(data.employeeEmail) // for future validation
                    break;
            }
            // calls init function to see if user wants to continue to end app
            init();
        })
}
// initialization function call for the start one node index.js is called
init();