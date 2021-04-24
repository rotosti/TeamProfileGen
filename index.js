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
}, {
    name: 'employeeID',
    type: 'input',
    message: `What is the new employee's ID number?`
}, {
    name: 'employeeEmail',
    type: 'input',
    message: `What is the new employee's email?`
}, {
    name: 'officeNumber',
    type: 'input',
    message: `What is the new employee's office number?`,
    when: answers => answers.position === 'Manager'
}, {
    name: 'github',
    type: 'input',
    message: `What is the new employee's GitHub username?`,
    when: answers => answers.position === 'Engineer'
}, {
    name: 'school',
    type: 'input',
    message: `What school is the new employee attending?`,
    when: answers => answers.position === 'Intern'
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
                    break;
                // if selected employee type is engineer
                case 'Engineer':
                    // adds engineer to engineer list once the object is created
                    engineerList.push(new Engineer(
                        data.employeeName,
                        data.employeeID,
                        data.employeeEmail,
                        data.github));
                    break;
                // if selected employee type is intern
                case 'Intern':
                    // adds intern to intern list once the object is created
                    internList.push(new Intern(
                        data.employeeName,
                        data.employeeID,
                        data.employeeEmail,
                        data.school));
                    break;
            }
            // calls init function to see if user wants to continue to end app
            init();
        })
}
// initialization function call for the start one node index.js is called
init();