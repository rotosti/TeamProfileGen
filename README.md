Author: Tomasz Siemion
Project: TeamProfileGen
DEMO LINK: https://vimeo.com/541098530

# TeamProfileGen
A simple team visualizer using the CLI and Inquirer to obtain information and making a formatted HTML page for visual representation.

## Installation

The app uses NodeJS, [Inquirer](https://www.npmjs.com/package/inquirer), and [Jest](https://jestjs.io/).  In order to install the necessary dependencies, run the following command:

```bash
npm i
```

## Usage

To run the application, one needs to have the terminal pointing in the directory of the `index.js` file and invoke the following command in the command line:

```md
node index.js
```

The user will then follow the prompts in the terminal and answer some questions, and the output file will be generated into the `dist` folder.

## Functionality

The app uses the CLI with Inquierer to obtain information from the user and build several types of `Employee` objects.  Once the user is done entering information the application will use a template literal to generate an `index.html` file which is stored in the `dist` folder in the directory. 

## Tests

The application uses the [Jest](https://jestjs.io/) testing framework to validate the objects created are functioning properly.  The validation also checks to see if the inheritance and methods of each object created are functioning properly.
