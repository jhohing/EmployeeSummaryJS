const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const fs = require("fs");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let teamList = [];
const managerQuestions = [
    {
        type: "input",
        name: "manager_name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "manager_id",
        message: "What is the manager's id?"
    },
    {
        type: "input",
        name: "manager_email",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "manager_officeNum",
        message: "What is the manager's office number?",
    }
];
const engineerQuestions = [
    {
        type:"input",
        name: "engineer_name",
        message: "What is your engineer's name?"
    },
    {
        type:"input",
        name: "engineer_id",
        message: "What is your engineer's id?"
    },
    {
        type:"input",
        name: "engineer_email",
        message: "What is your engineer's email?"
    },
    {
        type:"input",
        name: "engineer_gitHub",
        message: "What is your engineer's GitHub username?"
    },
];
const internQuestions = [
    {
        type:"input",
        name: "intern_name",
        message: "What is your intern's name?"
    },
    {
        type:"input",
        name: "intern_id",
        message: "What is your intern's id?"
    },
    {
        type:"input",
        name: "intern_email",
        message: "What is your intern's email?"
    },
    {
        type:"input",
        name: "intern_school",
        message: "What is your intern's school?"
    },
];
const newTeamMember = [
    {
        type: "list",
        name:"teamMember_type",
        choices: ["Engineer", "Intern", "No more team members to add"],
        message: "Select the role of the team member you want to add?"
    }
];

inquirer.prompt(managerQuestions).then(ans => {
    console.log(ans);
    teamList.push(new Manager(ans.manager_name, ans.manager_id))
})

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
