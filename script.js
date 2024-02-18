const inputTask = document.getElementById('input_task');
const tasksContainer = document.getElementById('tasks_container');

function addTask() {
	if (inputTask.value == '') {
		alert('You have to add a task');
	} else {
		// Add an li element with the value that the user has entered
		let li = document.createElement('li');
		li.innerHTML = inputTask.value;
		tasksContainer.appendChild(li);
		// Create an icon to remove the task
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);
	}
	// Clear the input box
	inputTask.value = '';
	saveData();
}

// Click on the tasks container
tasksContainer.addEventListener(
	'click',
	function (task) {
		if (task.target.tagName === 'LI') {
			// Check the task
			task.target.classList.toggle('task_checked');
			saveData();
		} else if (task.target.tagName === 'SPAN') {
			// Remove the task
			task.target.parentElement.remove();
			saveData();
		}
	},
	false
);

function saveData() {
	localStorage.setItem('data', tasksContainer.innerHTML);
}
function displayTask() {
	tasksContainer.innerHTML = localStorage.getItem('data');
}
displayTask();
