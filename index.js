const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateEmployeeCards = require("./src/genieProfileHTML");
const genieProfileHTML = require("./src/genieProfileHTML");

let team = [];

function validateInput(data) {
  if(data != "") {
    return true;
  } else {
    return "Please enter a response to the query"
  }
};

function addEmployees() {
  return inquirer.prompt([
    {
      type: "list",
      name: "employeeType",
      message: "What type of employee would you like to add to the team?", 
      choices: ["Manager", "Engineer", "Intern"],
      validate: validateInput,
    }
  ])
    .then(data => {
      switch (data.employeeType) {
        case 'Manager':
          managerPrompts();
          break;
        case 'Engineer':
          engineerPrompts();
          break;
        case 'Intern':
          internPrompts();
          break;
      };
    });
};

// Function containing Manager Prompts 
  function managerPrompts() {
      return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Manager?", 
        validate: validateInput,
      }, {
        type: "input",
        name: "id",
        message: "Please provide the id of the Manager?", 
        validate: validateInput,
      }, {
        type: "input",
        name: "email",
        message: "Please provide the Manager's email.",
        validate: function(data) {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
              return true;
          } else {
              return 'Not a valid email address. Please enter in the email again.';
          }
        },
      },  {
        type: "input",
        name: "mngrOfficeNum",
        message: "What is the office Number of the Manager?",
        validate: validateInput,
      }, {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"],
        validate: validateInput,
        },
        
      ]) .then((data)=>{
        // data.val().trim();
        const manager = new Manager(data.name, data.id, data.email, data.mngrOfficeNum);
        team.push(manager);
        if(data.addEmployee === "Yes") {
          addEmployees();
        } else if (data.addEmployee === "No") {
          let dataInput = genieProfileHTML(team);
          writeFile(dataInput);
        } else{
          console.log("error")
        };
      });
  };
  
// Function containing Engineer Prompts 
  function engineerPrompts() {
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the Engineer?", 
          validate: validateInput,
        }, {
          type: "input",
          name: "id",
          message: "Please provide the id of the Engineer?", 
          validate: validateInput,
        }, {
          type: "input",
          name: "email",
          message: "Please provide the Engineer's email.",
          validate: function(data) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
                return true;
            } else {
                return 'Not a valid email address. Please enter in the email again.';
            }
          },
        }, {
          type: "input",
          name: "engrGitHub",
          message: "Please provide the gitHub for the Engineer?",
          validate: validateInput,
        }, {
          type: "list",
          name: "addEmployee",
          message: "Would you like to add another employee?",
          choices: ["Yes", "No"],
          validate: validateInput,
        },
        
      ]) .then((data)=>{
        // data.val().trim();
        const engineer = new Engineer(data.name, data.id, data.email, data.engrGitHub);
        team.push(engineer);
        if(data.addEmployee === "Yes") {
          addEmployees();
        } else if (data.addEmployee === "No") {
          let dataInput = genieProfileHTML(team);
          writeFile(dataInput);
        } else{
          console.log("error")
        };
      });
  };

// Function containing Intern Prompts 
  function internPrompts() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Intern?", 
        validate: validateInput,
      }, {
        type: "input",
        name: "id",
        message: "Please provide the id of the Intern?", 
        validate: validateInput,
      }, {
        type: "input",
        name: "email",
        message: "Please provide the Intern's email.",
        validate: function(data) {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
              return true;
          } else {
              return 'Not a valid email address. Please enter in the email again.';
          }
        },
      }, {
          type: "input",
          name: "intrnSchool",
          message: "What is the school that the intern is attending?",
          validate: validateInput,
      }, {
          type: "list",
          name: "addEmployee",
          message: "Would you like to add another employee?",
          choices: ["Yes", "No"],
          validate: validateInput,
        },
        
      ]) .then((data)=>{
        // data.val().trim();
        const intern = new Intern(data.name, data.id, data.email, data.intrnSchool);
        team.push(intern);
        if(data.addEmployee === "Yes") {
          addEmployees();
        } else if (data.addEmployee === "No") {
          let dataInput = genieProfileHTML(team);
          writeFile(dataInput);
        } else {
          console.log("error")
        };
      })
  };

  // function to write html file from generateProfileHTML template.
  function writeFile(dataInput) {
    fs.promises.writeFile('dist/index.html', dataInput) 
      .then(() => {
      console.log(">====================================>");
      console.log("Successfully created HTML File");
      console.log(">====================================>");
      })
      .catch((err) => console.error(err));
  };

// function to initialise program to start prompts for user
  function init() {
    addEmployees();
  };

init();

module.exports = team

