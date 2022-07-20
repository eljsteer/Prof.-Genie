const inquirer = require("inquirer");
const fs = require("fs");

function validateInput(data) {
  if(data != "") {
    return true;
  } else {
    return "Please enter a response to the query"
  }
}

// TODO: Create an array of questions for user input
function profGenie() {
  return inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What is the name of the Employee?", 
    validate: validateInput,
  }, {
    type: "input",
    name: "id",
    message: "Please provide the id of the Employee?", 
    validate: validateInput,
  }, {
    type: "input",
    name: "email",
    message: "Please provide your email.",
    validate: function(data) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
          return true;
      } else {
          return 'Not a valid email address. Please enter in the email again.';
      }
    },
  }, {
    type: "input",
    name: "mngr-officeNum",
    message: "What is the office Number of the Manager?",
    validate: validateInput,
  }, {
    type: "input",
    name: "eng-gitHub",
    message: "Please provide the gitHub for the Engineer?",
    validate: validateInput,
  }, {
    type: "input",
    name: "intrn-schl",
    message: "What is the school that the intern is attending?",
    validate: validateInput,
  },
]);
};

function init(profGenie) {
  profGenie()
    .then((data) => {
      console.log(data)
      if (!fs.existsSync(profGenie)) {
          fs.mkdirSync(profGenie);
          console.log('Directory created');
          fs.writeFileSync('../README/README.md', generateMarkdown(data), (error) => {
            if (error) {
              throw error;
            } else {
              console.log('File created');
            };
          });
      } else {
        fs.writeFileSync('../README/README.md', generateMarkdown(data), (error) => {
            if (error) {
                throw error;
            } else {
                console.log('File created');
            }
        });
      }
    });
  }

init('README', 'index.html');
