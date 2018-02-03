
$(document).ready(function(){
  $('#submitEmployeeButton').on('click', gatherEmployeeInformation)
})

var employeeArray = []

function gatherEmployeeInformation(){
  var newEmployee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    employeeId: $('#employeeId').val(),
    jobTitle: $('#jobTitle').val(),
    salary: $('#annualSalary').val()
  }
  employeeArray.push(newEmployee);
  $('#firstName').val('');
  $('#lastName').val('');
  $('#employeeId').val('');
  $('#jobTitle').val('');
  $('#annualSalary').val('');
  console.log(employeeArray);
  //call on displayEmployees function
  displayEmployees();
}

function displayEmployees(){
  $('#employeeTableBody').empty();
  var toAppendToTable;
  for (var i=0; i<employeeArray.length; i++){
      toAppendToTable += '<tr>';
      toAppendToTable += '<td>';
      toAppendToTable += employeeArray[i].firstName;
      toAppendToTable += '</td>';
      toAppendToTable += '<td>';
      toAppendToTable += employeeArray[i].lastName;
      toAppendToTable += '</td>';
      toAppendToTable += '<td>';
      toAppendToTable += employeeArray[i].employeeId;
      toAppendToTable += '</td>';
      toAppendToTable += '<td>';
      toAppendToTable += employeeArray[i].jobTitle;
      toAppendToTable += '</td>';
      toAppendToTable += '<td>';
      toAppendToTable += employeeArray[i].salary;
      toAppendToTable += '</td>';
      toAppendToTable += '<td>';
      toAppendToTable += '<button id="deleteButton">Delete</button>';
      toAppendToTable += '</td>';
      toAppendToTable += '</tr>';
    }
    toAppendToTable += '<tr>';
    toAppendToTable += '<td class="lastRow">';
    toAppendToTable += '</td>';
    toAppendToTable += '<td class="lastRow">';
    toAppendToTable += '</td>';
    toAppendToTable += '<td class="lastRow">';
    toAppendToTable += '</td>';
    toAppendToTable += '<td id="salariesTotal">';
    toAppendToTable += 'Salaries Total:';
    toAppendToTable += '</td>';
    toAppendToTable += '<td>';
    toAppendToTable += calculateCost();
    toAppendToTable += '</td>';
    toAppendToTable += '</tr>';
    console.log("toAppendToTable:", toAppendToTable);
    $('#employeeTableBody').append(toAppendToTable);
    $('td').css("border-style", "solid");
    $('td').css("border-width", "1px");
    $('td').css("border-color", "#0E1828");
    $('td').css("padding-left", "10px");
    $('.lastRow').css("border","none");
    $('td').css("color","#0E1828");
    $('tr:odd').css("background-color", "#DCDCDE");
    $('tr:even').css("background-color", "#A4A7AB");
    $('#salariesTotal').css("text-align","right");
}

function calculateCost(){
  var salaryTotal = 0;
  for (var i=0; i<employeeArray.length; i++){
    salaryTotal+=parseInt(employeeArray[i].salary);
  }
  return (salaryTotal);
}
