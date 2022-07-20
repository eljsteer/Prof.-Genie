const Employee = require("../lib/employee");

function generateEngineerCard () {
  // if no engineers then do nothing
}
function generateManagerCard ({name,id,email,mngrOfficeNum}) {
  // if no engineers then do nothing
  const manager = new Manager(name,id,email,mngrOfficeNum)
}
function generateInternCard () {
  // if no engineers then do nothing
}

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
  <div id="forecast-container" class="card my-3">
    <h5 class="card-header" style="background-color: rgb(1, 96, 139); color: white;">5 Day Forecast:</h5>
    <div class="card-body">
      <div class="card-deck">
        <div class="card p-2 m-2" style="background-color: rgb(221, 245, 250);">
          <h6 class="card-title">${generateEngineerCard()}</h6>
          <h6 class="card-title">${getRole}</h6>
          <ul class="list-group">
            <li class="list-group-item active">${Employee.id}</li>
            <li class="list-group-item">${Employee.email}</li>
            <li class="list-group-item">${getRole()}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;