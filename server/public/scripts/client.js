$(document).ready(onReady);

function onReady () {
  console.log('JQ is working');
  setupClickListeners();
}

function setupClickListeners() {
  $('#addButton').on( 'click', function() {
    console.log('in addButton on click');
    let taskToBeCompleted = {
      task: $('#taskIn').val(),
      instructions: $('#instructionsIn').val(),
    }
    clearInputs();
  });
  };

  function clearInputs()  {
    $('#taskIn').val(''),
    $('#instructionsIn').val(''),
    console.log('Inputs cleared');
  };
  
  function getTasks() {
    $.ajax({
      type: 'GET',
      url: '/tasks'
    }).then(function(response) {
      // console.log(response);
      renderTasks(response);
    }).catch(function(error){
      console.log('error in GET', error);
    });
  };

  function renderTasks(weekendToDoList) {
    console.log('in renderTasks');
    $('#viewToDoItems').empty();
  
    for (let i=0; i<weekendToDoList.length; i++) {
      let weekendToDoList = weekendToDoList[i];
      //readyOrNot(koala);
    }
  } // end renderTasks