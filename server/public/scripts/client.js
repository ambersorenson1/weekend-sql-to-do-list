$(document).ready(onReady);

function onReady () {
  console.log('Weekend-Knockout ');
  renderTasks();
$(document).on('click', '#addButton', setupTask);
$(document).on('click', '.delete-btn', deleteTask);
}
//function for when a user clicks on the add button
//we are grabbing the values using jQuery and creating a new object
function setupTask() {
    console.log('setting up a new task');
    let taskToBeCompleted = {
      task: $('#taskIn').val(),
      additionalNotes: $('#notesIn').val(),
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
    console.log('Inputs cleared');
  };
  

   function renderTasks(tasks) {
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
            <td>${task.notes}</td>
            <td>${task.complete}</td>
            <td><button class="delete-btn" data-id="${task.id}">❌</button></td>
            <td><button class="complete-btn" type="checkbox" data-id="${task.id}"></button></td>
          </tr>
        `);
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

  // function updateTask() {
  //   console.log('click!')
  //   const updatedTask = {
  //     id: $('#id-update').val(),
  //     task: $('#task-update').val(),
  //   }
  //   $.ajax({
  //     method: 'PUT',
  //     url: `/tasks/${updatedTask.id}`,
  //     data: updatedSong
  //   }).then((res) => {
  //     console.log('you sent a PUT!')
  //     renderTasks();
  //   }).catch((err) => {
  //     console.error(err);
  //   });
    
  // }




