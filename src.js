const employiner = [];

function viewClick(index) {
  const employee = employiner[index];
  const employeeJson = JSON.stringify(employee);
  localStorage.setItem('employee', employeeJson);
  location.href = 'second.html';
}

function employeeDataGenerator() {
  const employeelength = employiner.length;

  const employee = {
      id:employeelength,
      name:"Account"+employeelength,
      CreatedOn: "05-08-2021",
      Owner:"User"+employeelength,
  }

  employiner.push(employee);

  return employee;
}
function RowMaker() {
  const employee = employeeDataGenerator();
  let table = document.getElementById("myTable")
  
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

  cell1.innerHTML = employee.id
  cell2.innerHTML = employee.name
  cell3.innerHTML = employee.CreatedOn
  cell4.innerHTML = employee.Owner
  cell5.innerHTML = `<input type= "button" onclick="viewClick(${employee.id})" value = "view">`;
}