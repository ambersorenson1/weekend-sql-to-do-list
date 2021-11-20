$(document).ready(onReady);

function onReady () {
  console.log('Weekend-Knockout ');
  renderTasks();
$(document).on('click', '#addButton', setupTask);
}
//function for when a user clicks on the add button
//we are grabbing the values using jQuery and creating a new object
function setupTask() {
    console.log('setting up a new task');
    let taskToBeCompleted = {
      task: $('#taskIn').val(),
      instructions: $('#instructionsIn').val(),
    }
    $.ajax({
      type: 'POST',
      url: '/tasks',
      data: taskToBeCompleted,
    }).then((response) => {
       console.log('Response from server.', response);
    }).catch((error) => {
      console.error(error);
      });
    renderTasks();
    clearInputs();
  }; // end taskToBeCompleted

    //function to clear inputs after they have been added
  function clearInputs()  {
    $('#taskIn').val(''),
    $('#instructionsIn').val(''),
    console.log('Inputs cleared');
  };
  

   function renderTasks() {
    $.ajax({
      type: 'GET',
      url: '/tasks'
    }).then((response) => {
      $("#viewToDoItems").empty();
      console.log("GET /tasks response", response);
      for (let task of response) {
        $('#viewToDoItems').append(`
          <tr>
            <td>${task.task}</td>
            <td>${task.instructions}</td>
            <td><button type="button" id="deleteButton">$Delete Task</button></td>
          </tr>
        `);
        }
    });
  } // end renderTasks



