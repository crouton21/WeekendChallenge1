
$(document).ready(function(){
  $('#submitEmployeeButton').on('click', gatherEmployeeInformation);
  $('#employeeTableBody').on('click','#deleteButton', deleteButtonPressed);
})

var employeeArray = []

function gatherEmployeeInformation(){
  //add new employee object based on input
  var newEmployee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    employeeId: $('#employeeId').val(),
    jobTitle: $('#jobTitle').val(),
    salary: $('#annualSalary').val()
  }

  // //check to make sure annualSalary is a number
   if (typeof(parseInt($('#annualSalary').val())) != 'number' || $('#annualSalary').val() == ''){
      alert('Annual salary must be a number');
      $('#annualSalary').val('');
      return; //stop function if IDs are not unique
   }

  //check to make sure IDs are unique
  for (var i=0; i<employeeArray.length; i++){
    if ($('#employeeId').val() == employeeArray[i].employeeId){
      alert("Employee ID must be unique");
      $('#employeeId').val('');
      return; //stop function if IDs are not unique
    }
  }
  //add new employee object to employeeArray
  employeeArray.push(newEmployee);
  //clear input values
  $('#employeeId').val('');
  $('#firstName').val('');
  $('#lastName').val('');
  $('#jobTitle').val('');
  $('#annualSalary').val('');
  //call on calculateCost to calculate total salaries
  calculateCost();
} //gatherEmployeeInformation

function displayEmployees(newSalary){
  //empty table body
  $('#employeeTableBody').empty();
  var toAppendToTable;  //start of what will be appended to table body--employeesArray as table cells
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
      toAppendToTable += '<button id="deleteButton" data-index="' +i+ '">Delete</button>';
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
    toAppendToTable += 'Monthly Salary Total:';
    toAppendToTable += '</td>';
    toAppendToTable += '<td>';
    toAppendToTable += newSalary;
    toAppendToTable += '</td>';
    toAppendToTable += '</tr>';
    $('#employeeTableBody').append(toAppendToTable);
    //css for dyanmic table body
    $('td').css("border-style", "solid");
    $('td').css("border-width", "1px");
    $('td').css("border-color", "#0E1828");
    $('td').css("padding-left", "10px");
    $('td').css("font-family", "monospace");
    $('.lastRow').css("border","none");
    $('.lastRow').css("background-color","#838E9E");
    $('td').css("color","#0E1828");
    $('tr:odd').css("background-color", "#DCDCDE");
    $('tr:even').css("background-color", "#A4A7AB");
    $('.lastRow').css("background-color", "none");
    $('#salariesTotal').css("text-align","right");
}

function calculateCost(){
  var salaryTotal = 0;
  for (var i=0; i<employeeArray.length; i++){
    //add each employee object's salary to salaryTotal
    salaryTotal+=parseInt(employeeArray[i].salary);
  }
  //display employees on DOM
  salaryTotal = Math.round(salaryTotal/12);
  displayEmployees(salaryTotal);
}//end calculateCost

function deleteButtonPressed(){
  //remove table row
  $(this).parent().parent().remove();
  //index of employee object to be deleted
  var index = $( this ).data( 'index' );
  //take employee out of employeeArray
  employeeArray.splice( index , 1 );
  //recalculate salary
  calculateCost();
}//end deleteButtonPressed
