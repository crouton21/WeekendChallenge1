
$(document).ready(function(){
  $('#submitEmployeeButton').on('click', gatherEmployeeInformation);
  $('#employeeTableBody').on('click','#deleteButton', deleteButtonPressed);
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
  //displayEmployees();
  //calculate total salary
  calculateCost();
}

function displayEmployees(newSalary){
  console.log('in displayEmployees')
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
      toAppendToTable += '<button id="deleteButton" data-salary="' +i+ '">Delete</button>';
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
    toAppendToTable += newSalary;
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
    $('.lastRow').css("background-color", "none");
    $('#salariesTotal').css("text-align","right");
}

function calculateCost(){
  console.log('in calculateCost',employeeArray);
  var salaryTotal = 0;
  for (var i=0; i<employeeArray.length; i++){
    salaryTotal+=parseInt(employeeArray[i].salary);
  }
  //return (salaryTotal);
  //display new salary on DOM
  displayEmployees(salaryTotal);
}

function deleteButtonPressed(){
  console.log( "in deleteButtonPressed", $( this ).data( 'salary' ) );
  $(this).parent().parent().remove();
  //remove employee from employeesArray
  var index = $( this ).data( 'salary' )
  //console.log(employeeArray[index]);
  employeeArray.splice( index , 1 );
  //recalculate salary
  calculateCost();
}
