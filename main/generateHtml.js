const generateManager = function (manager) {
    return `
    <div class="container  p-3">
    <div class="row">
      <div class="card col-4 mt-4" style="width: 18rem;">
        <div class="card-body bg-primary">
          <h5 class="card-title">${manager.name}</h5>
          <i class="material-symbols-outlined"> local_cafe </i>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-item m-3 p-4">
          <li class="list-group-item">Id: ${manager.id}</li>
          <li class="list-group-item">Email:<a href="mailto:${manager.email}"> ${manager.email}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>
    `;
};

const generateEngineer = function (engineer) {
    return `
    <div class="card col-4 mt-4" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h5 class="card-title">${engineer.name}</h5>
      <i class="material-symbols-outlined"> code </i>
      <p class="card-text">Engineer</p>
    </div>
    <ul class="list-group list-group-item m-3 p-4">
      <li class="list-group-item">Id: ${engineer.id}</li>
      <li class="list-group-item">Email:<a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
  </div>
    `
};

const generateIntern = function (intern) {
    return `
    <div class="card col-4 mt-4" style="width: 18rem;">
        <div class="card-body bg-primary">
          <h5 class="card-title">${intern.name}</h5>
          <i class="material-symbols-outlined">
            school
          </i>
          <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-item m-3 p-4">
          <li class="list-group-item">Id: ${intern.id}</li>
          <li class="list-group-item">Email:<a href="mailto:${intern.email}"> ${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
    `
};

generateHTML = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }


    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;
};

const generateTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title> Team Profile Generator </title>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
<nav class="navbar navbar-light justify-content-center bg-danger">
  <span class="navbar-brand mb-0 h1">My Team</span>
</nav>
<div class="container">
<div class="row justify-content-center" id="team-cards">
                    ${employeeCards}
                </div>
            </div>
        
        </body>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </html>
  `;
  };





module.exports = generateHTML; 