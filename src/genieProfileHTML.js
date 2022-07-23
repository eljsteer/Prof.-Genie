const Employee = require("../lib/employee");
const team = require("../index");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


const generateManagerCard = (Manager) => {
  `<div class="card my-2">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${Manager.getName()}</h5>
      <h6 class="card-title"><i class="fa-regular fa-mug-hot"></i>${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Manager.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>`;
};

const generateEngineerCard = (Engineer) =>
  `<div class="card">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${Engineer.getName()}</h5>
      <h6 class="card-title"><i class="fa-regular fa-laptop-code"></i>${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Engineer.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
        <li class="list-group-item" href="https://github.com/${Engineer.getGitHub()}">Github: ${Engineer.getGitHub()}</li>
      </ul>
    </div>
  </div>`;

const generateInternCard = (Intern) =>
  `<div class="card">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${Intern.getName()}</h5>
      <h6 class="card-title"><i class="fa-regular fa-user-graduate"></i>${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Intern.getID().id}</li>
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
  <title>Team Profile Genie</title>
</head>
<body>
  <div class="card col-sm-6 col-md-4 col-9 col-lg-3 m-3">
    <div class="card-deck">
      ${generateEmployeeCards(team)}
    </div>
  </div>
  <script src="https://kit.fontawesome.com/f271dd3923.js" crossorigin="anonymous"></script>
</body>
</html>`;



module.exports = genieProfileHTML;