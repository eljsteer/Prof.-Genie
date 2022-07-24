const Employee = require("../lib/employee");
const team = require("../index");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


const generateManagerCard = (Manager) =>
  `<div class="card m-3">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${Manager.getName()}</h5>
      <h6 class="card-title"><i class="fa-solid fa-mug-hot mr-2"></i>${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Manager.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>`;


const generateEngineerCard = (Engineer) =>
  `<div class="card m-3">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${Engineer.getName()}</h5>
      <h6 class="card-title"><i class="fa-solid fa-laptop-code mr-2"></i>${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Engineer.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${Engineer.getGitHub()}">${Engineer.getGitHub()}</a></li>
      </ul>
    </div>
  </div>`;

const generateInternCard = (Intern) =>
  `<div class="card m-3">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${Intern.getName()}</h5>
      <h6 class="card-title"><i class="fa-solid fa-user-graduate mr-2"></i>${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Intern.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>`;

function generateEmployeeCards (team) {
  let html = "";
  for (i = 0; i < team.length; i++) {
    if(team[i] instanceof Manager) {
      html = html.concat(generateManagerCard(team[i]));
    }
    else if(team[i] instanceof Engineer) {
      html = html.concat(generateEngineerCard(team[i]));
    }
    else if(team[i] instanceof Intern) {
      html = html.concat(generateInternCard(team[i]));
    };
  };
  return html;
};

const genieProfileHTML = (team) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="https://kit.fontawesome.com/f271dd3923.js" crossorigin="anonymous"></script>
  <link rel="stylesheet href="style.css">
  <title>Team Profile Genie</title>
</head>
<body>
<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="text-center display-6">My Team of Heroes</h1>
  </div>
</div>
  <div class="container d-flex justify-content-center w-75">
    <div class="card-deck">
      ${generateEmployeeCards(team)}
    </div>
  </div>
</body>
</html>`;



module.exports = genieProfileHTML;