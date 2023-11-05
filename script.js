function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('tasks');

  if (taskInput.value === '') {
    alert('Enter a task to add');
  } else {
    var newTask = document.createElement('li');
    newTask.innerHTML = taskInput.value + ' <button onclick="completeTask(this)">Complete</button> <button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

function completeTask(taskItem) {
  var completedTasks = document.getElementById('completedTasks');
  var taskText = taskItem.parentNode.firstChild.textContent;
  var completedTask = document.createElement('li');
  completedTask.innerHTML = taskText + ' <button onclick="deleteCompletedTask(this)">Delete</button>';
  completedTasks.appendChild(completedTask);
  taskItem.parentNode.remove();
}

function deleteTask(taskItem) {
  taskItem.parentNode.remove();
}

function deleteCompletedTask(taskItem) {
  taskItem.parentNode.remove();
}