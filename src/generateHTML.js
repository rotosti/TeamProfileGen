// html generating function, is a helper function to index.js, accepts the manager, engineer, and intern list
// function will call card generators to make cards in the specific locations based on position
function generateHTML(mL, eL, iL) {
    // reasignment of of the lists
    let managerList = mL;
    let engineerList = eL;
    let internList = iL;
    // returns the html generation string
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <title>Manager Tree</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper indigo">
              <a href="#" class="brand-logo center">My Team</a>
            </div>
        </nav>
        <div class="container">
            <h3 class="center-align indigo-text">Management</h3>
            <div class="row">
                <div id='management-container'>
                    ${createManagementCards(managerList)}
                </div>
            </div>
            <h3 class="center-align indigo-text">Engineering</h3>
            <div class="row">
                <div id='management-container'>
                    ${createEngineerCards(engineerList)}
                </div>
            </div>
            <h3 class="center-align indigo-text">Interns</h3>
            <div class="row">
                <div id='management-container'>
                    ${createInternCards(internList)}
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>`;
}
// creates management employee cards
function createManagementCards(managerList) {
    // initial string
    let returnString = '';
    // loops over every manager object and builds a card per manager
    managerList.forEach((manager) => {
        returnString += `<div class="col s12 m6 l4">
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content indigo white-text">
                    <h4>${manager.getName()}</h4>
                    <h5>${manager.getRole()}</h5>
                    </div>
                    <ul class="collection">
                        <li class="collection-item">Employee ID: ${manager.getID()}</li>
                        <a href="mailto:${manager.getEmail()}" class="collection-item black-text">Email: ${manager.getEmail()}</a>
                        <li class="collection-item">Office: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>`
    });
    // returns string in html syntax to html building function
    return returnString;
}
// creates engineer employee cards
function createEngineerCards(engineerList) {
    // initial string
    let returnString = '';
    // loops over every engineer object and builds a card per engineer
    engineerList.forEach((engi) => {
        returnString += `<div class="col s12 m6 l4">
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content indigo white-text">
                    <h4>${engi.getName()}</h4>
                    <h5>${engi.getRole()}</h5>
                    </div>
                    <ul class="collection">
                        <li class="collection-item">Employee ID: ${engi.getID()}</li>
                        <a href="mailto:${engi.getEmail()}" class="collection-item black-text">Email: ${engi.getEmail()}</a>
                        <a href="https://github.com/${engi.getGithub()}" target="_blank" class="collection-item black-text">GitHub: ${engi.getGithub()}</a>
                    </ul>
                </div>
            </div>
        </div>`
    });
    // returns string in html syntax to html building function
    return returnString;

}
// creates intern employee cards
function createInternCards(internList) {
    // initial string
    let returnString = '';
    // loops over every engineer object and builds a card per engineer
    internList.forEach((intern) => {
        returnString += `<div class="col s12 m6 l4">
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content indigo white-text">
                    <h4>${intern.getName()}</h4>
                    <h5>${intern.getRole()}</h5>
                    </div>
                    <ul class="collection">
                        <li class="collection-item">Employee ID: ${intern.getID()}</li>
                        <a href="mailto:${intern.getEmail()}" class="collection-item black-text">Email: ${intern.getEmail()}</a>
                        <li class="collection-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>`
    });
    // returns string in html syntax to html building function
    return returnString;

}

module.exports = {
    generateHTML,
}