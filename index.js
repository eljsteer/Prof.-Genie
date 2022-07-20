const inquirer = require("inquirer");
const fs = require("fs");

function validateInput(data) {
  if(data != "") {
    return true;
  } else {
    return "Please enter a response to the query"
  }
}

// Once we have received data from prompts then create new constructor objects from the classes

function profGenie() {
  return inquirer.prompt([
    {
      type: "list",
      name: "employeeType",
      message: "What type of employee would you like to add to the team?", 
      choices: [Manager, Engineer, Intern],
      validate: validateInput,
    }
    .then(answer => {
      switch (answer.employeeType) {
        case 'Manager':
          managerPrompts(Manager);
          break;
      }
    });

  function managerPrompts() {
      return inquirer.prompt([
        {
          type: "input",
          name: "employeeType",
          message: "What type of employee would you like to add to the team?", 
          choices: [Manager, Engineer, Intern],
          validate: validateInput,
        }
        
      ]) .then((data)=>{
        generateManagerCard(data);
      })

    
  //   type: "input",
  //   name: "name",
  //   message: "What is the name of the Employee?", 
  //   validate: validateInput,
  // }, {
  //   type: "input",
  //   name: "id",
  //   message: "Please provide the id of the Employee?", 
  //   validate: validateInput,
  // }, {
  //   type: "input",
  //   name: "email",
  //   message: "Please provide your email.",
  //   validate: function(data) {
  //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
  //         return true;
  //     } else {
  //         return 'Not a valid email address. Please enter in the email again.';
  //     }
  //   },
  // }, {
  //   type: "input",
  //   name: "mngrOfficeNum",
  //   message: "What is the office Number of the Manager?",
  //   validate: validateInput,
  // }, {
  //   type: "input",
  //   name: "engrGitHub",
  //   message: "Please provide the gitHub for the Engineer?",
  //   validate: validateInput,
  // }, {
  //   type: "input",
  //   name: "intrnSchool",
  //   message: "What is the school that the intern is attending?",
  //   validate: validateInput,
  // }, {
  //   type: "list",
  //   name: "role",
  //   message: "Would you like to add another role?",
  //   validate: validateInput,
  // },
// ]);
};

function init(profGenie) {
  profGenie()
    .then((data) => {
      console.log(data)
          fs.writeFileSync('../dist/index.html', profGenie(data), (error) => {
            if (error) {
              throw error;
            } else {
              console.log('File created');
            };
          });
      })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        console.log(error)
      }
    });
};

init("index.html", "style.css");
