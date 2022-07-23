const Employee = require("../lib/employee");
const team = require("../index");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


const generateManagerCard = (teamMember) =>
  `
  <div class="card">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${teamMember.Name}</h5>
      <h6 class="card-title"><i class="fa-regular fa-mug-hot"></i>${teamMember}</h6>
    </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${teamMember.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a></li>
      <li class="list-group-item">Office Number: ${teamMember.mngrOfficeNum}</li>
    </ul>
  </div>`;

const generateEngineerCard = (teamMember) =>
  `
  <div class="card">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${teamMember.Name}</h5>
      <h6 class="card-title"><i class="fa-regular fa-laptop-code"></i>${teamMember}</h6>
    </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${teamMember.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a></li>
      <li class="list-group-item" href="https://github.com/${teamMember.engrGitHub}">Github: ${teamMember.engrGitHub}</li>
    </ul>
  </div>`;

const generateInternCard = (teamMember) =>
  `
  <div class="card">
    <div class="card-header" style="background-color: rgb(1, 96, 139); color: white;">
      <h5 class="card-title">${teamMember.Name}</h5>
      <h6 class="card-title"><i class="fa-regular fa-user-graduate"></i>${teamMember}</h6>
    </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${teamMember.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a></li>
      <li class="list-group-item">School: ${teamMember.intrnSchool}</li>
    </ul>
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