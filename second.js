const employeeJson = localStorage.getItem('employee');
   const employee = JSON.parse(employeeJson);

   
  let cell1 = document.getElementById("idid").insertCell(1);
  let cell2 = document.getElementById("nameid").insertCell(1);
  let cell3 = document.getElementById("ownerid").insertCell(1);
  let cell4 = document.getElementById("CreatedOnid").insertCell(1);
  let cell5 = document.getElementById("UpdatedOnid").insertCell(1)

  cell1.innerHTML = employee.id
  cell2.innerHTML = employee.name
  cell3.innerHTML = employee.CreatedOn
  cell4.innerHTML = employee.Owner
  cell5.innerHTML = employee.CreatedOn