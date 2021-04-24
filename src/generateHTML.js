function generateHTML(mL, eL, iL) {

    let managerList = mL;
    let engineerList = eL;
    let internList = iL;

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

function createManagementCards(managerList) {

    let returnString = '';

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
                        <li class="collection-item">Email: ${manager.getEmail()}</li>
                        <li class="collection-item">Office: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>`
    });

    return returnString;
}

function createEngineerCards(engineerList) {

    let returnString = '';

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
                        <li class="collection-item">Email: ${engi.getEmail()}</li>
                        <a href="#!" class="collection-item black-text">GitHub: ${engi.getGithub()}</a>
                    </ul>
                </div>
            </div>
        </div>`
    });

    return returnString;

}

function createInternCards(internList) {

    let returnString = '';

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
                        <li class="collection-item">Email: ${intern.getEmail()}</li>
                        <li class="collection-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>`
    });

    return returnString;

}

module.exports = {
    generateHTML,
}