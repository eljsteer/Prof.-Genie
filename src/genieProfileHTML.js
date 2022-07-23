const Employee = require("../lib/employee");
const team = require("../index");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


const generateManagerCard = (teamMember) =>
  `<div class="card">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${team[i].Name}</h5>
      <h6 class="card-title"><i class="fa-regular fa-mug-hot"></i>${team[i]}</h6>
    </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${team[i].id}</li>
      <li class="list-group-item" href="mailto:${team[i].email}">Email: ${team[i].email}</li>
      <li class="list-group-item">Office Number: ${team[i].mngrOfficeNum}</li>
    </ul>
  </div>`;

const generateEngineerCard = (teamMember) =>
  `<div class="card">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${team[i].Name}</h5>
      <h6 class="card-title"><i class="fa-regular fa-laptop-code"></i> ${team[i]}</h6>
    </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${team[i].id}</li>
      <li class="list-group-item" href="mailto:${team[i].email}">Email: ${team[i].email}</li>
      <li class="list-group-item" href="https://github.com/${team[i].engrGitHub}">Github: ${team[i].engrGitHub}</li>
    </ul>
  </div>`;

const generateInternCard = (teamMember) =>
  `<div class="card">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${team[i].Name}</h5>
      <h6 class="card-title"><i class="fa-regular fa-user-graduate"></i>${team[i]}</h6>
    </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${team[i].id}</li>
      <li class="list-group-item" href="mailto:${team[i].email}">Email: ${team[i].email}</li>
      <li class="list-group-item">School: ${team[i].intrnSchool}</li>
    </ul>
  </div>`;

function generateEmployeeCards (team) {
  for (i = 0; i < team.length; i++) {
    if(team[i] instanceof Manager) {
      generateManagerCard();
    }
    else if(team[i] instanceof Engineer) {
      generateEngineerCard();
    }
    else if(team[i] instanceof Intern) {
      generateInternCard();
    };
  };
};

const genieProfileHTML = (team) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile Genie</title>
</head>
<body>
  <div class="card col-sm-6 col-md-4 col-9 col-lg-3 m-3">
    <div class="card-deck">
      ${generateEmployeeCards(team[i])}
    </div>
  </div>
  <script src="https://kit.fontawesome.com/f271dd3923.js" crossorigin="anonymous"></script>
</body>
</html>`;



module.exports = genieProfileHTML;