$(document).ready(onReady);

function onReady () {
  console.log('Weekend-Knockout ');
  renderTasks();
$(document).on('click', '#addButton', setupTask);
$(document).on('click', '.delete-btn', deleteTask);
$(document).on('click', '.complete-btn', completeTasks)
}
//function for when a user clicks on the add button
//we are grabbing the values using jQuery and creating a new object
function setupTask() {
    console.log('setting up a new task');
    let taskToBeCompleted = {
      task: $('#taskIn').val(),
      notes: $('#notesIn').val(),
      complete: $('#taskDoneOrNot').val(),
    }
    $.ajax({
      type: 'POST',
      url: '/tasks',
      data: taskToBeCompleted,
    }).then((response) => {
       console.log('Response from server.', response);
       renderTasks();
    }).catch((error) => {
      console.error(error);
      });
    clearInputs();
  }; // end taskToBeCompleted

    //function to clear inputs after they have been added
  function clearInputs()  {
    $('#taskIn').val(''),
    $('#notesIn').val(''),
    $('#taskDoneOrNot').val(''),
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
        if (task.complete === 'N') {
        $('#viewToDoItems').append(`
          <tr>
            <td>${task.task}</td>
            <td>${task.notes}</td>
            <td>${task.complete}</td>
            <td><button class="complete-btn" data-id="${task.id}">Complete ✅</button></td>
            <td><button class="delete-btn" data-id="${task.id}">Delete ❌</button></td>
          </tr>
        `);
        } else {
          $('#viewToDoItems').append(`
          <tr>
            <td>${task.task}</td>
            <td>${task.notes}</td>
            <td>${task.complete}</td>
            <td></td>
            <td><button class="delete-btn" data-id="${task.id}">Delete ❌</button></td>
          </tr>
        `);
        }
      }
    });
  } // end renderTasks

  function deleteTask() {
    const taskIdToDelete = $(this).data('id');
    $.ajax({
      type: 'DELETE',
      url: `/tasks/${taskIdToDelete}`
    }).then((response) => {
      console.log(response);
      renderTasks();
    }).catch((error) => {
      console.log('ERROR');
      
    })
  };

  function completeTasks() {
    console.log('click!')
    const updatedTask = $(this).data('id')
    $.ajax({
      method: 'PUT',
      url: `/tasks/${updatedTask}`
    }).then((res) => {
      console.log('you sent a PUT!')
      renderTasks();
    }).catch((err) => {
      console.error(err);
    });
    
  }




