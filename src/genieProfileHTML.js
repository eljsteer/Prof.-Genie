const Employee = require("../lib/employee");
const Manager = require("../lib/Manager");


function generateEmployeeCards ({team}) {
  // for (i = 0; i < team.length; i++) {
  //   const team[i];
  // };
  for (const employee of team) {
    // Employee Card 
    let employeeCard = document.createElement("div");
    employeeCard.classList.add("card p-2 m-2");

    // Employee Card Header
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    let employeeName = document.createElement("h4")
    employeeName.innerText(team[i].Name);
    let employeeRole = document.createElement("h5")
    if(team[i] == "manager") {
      employeeRole.innerText(`☕ ${team[i]}`);
    }
    else if(team[i] == "engineer") {
      employeeRole.innerText(`🖥️💻 ${team[i]}`);
    }
    else if(team[i] == "intern") {
      employeeRole.innerText(`🎓🧑‍🎓 ${team[i]}`);
    };

    // Employee Card Details 
    let employeeDetails = document.createElement("ul");
    employeeDetails.classList.add("list-group");
    let employeeListID = document.createElement("li");
    employeeListID.classList.add("list-group-item");
    let employeeListEmail = document.createElement("li");
    employeeListEmail.classList.add("list-group-item");
    let employeeListOther = document.createElement("li");
    employeeListOther.classList.add("list-group-item");
      //Employee ID 
    let employeeId = team[i].id;
    employeeListID.innerText(`ID: ${employeeId}`)
      // Employee Email
    let employeeEmail = team[i].email;
    employeeListEmailLink = document.createElement("a");
    employeelistEmailLink = document.setAttribute("href", `mailto:${employeeEmail}`);
    employeeListEmail.append(employeeListEmailLink);
    employeeListEmail.innerText(`Email: ${employeeEmail}`);

      // Employee Other Specific Detail
    if(team[i] == "manager") {
      employeeListOther.innerText(`Office Number: ${team[i].mngrOfficeNum}`);
    }
    else if(team[i] == "engineer") {
      employeelistOtherLink = document.createElement("a")
      employeeListOther.append(employeelistOtherLink);
      employeelistOtherLink = document.setAttribute("href", `https://github.com/${team[i].engrGitHub}`);
      employeeListOther.innerText(`GitHub: ${team[i].engrGitHub}`);
    }
    else if(team[i] == "intern") {
      employeeListOther.innerText(`School: ${team[i].intrnSchool}`);
    };

    employeeDetails.appendChild(employeeListID, employeeListEmail, employeeListOther)
    cardHeader.appendChild(employeeName, employeeRole);
    employeeCard.appendChild(cardHeader, employeeDetails);
  }
};



const genieProfileHTML = ({name, id, email, mngrOfficeNum, engrGitHub, intrnSchool }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="container" class="card m-3">
    <div class="card-body">
      <div class="card-deck">
        ${generateEmployeeCards()}
      </div>
    </div>
  </div>
</body>
</html>`;

module.exports = {generateEngineerCard, generateManagerCard, generateInternCard};