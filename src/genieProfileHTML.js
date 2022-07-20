

const genieProfileHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

<div id="forecast-container" class="card my-3">
  <h5 class="card-header" style="background-color: rgb(1, 96, 139); color: white;">5 Day Forecast:</h5>
  <div class="card-body">
    <div class="card-deck">
      <div class="card p-2 m-2" style="background-color: rgb(221, 245, 250);">
        <h6 class="card-title">21/07/2022</h6>
        <img src="" style="height: 50px; width: 50px;"></img>
        </div>
      </div>
    </div>
  </div>