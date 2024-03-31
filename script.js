document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTask = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    
    
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToList(task));

    addTask.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const newTask = { text: taskText };
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            addTaskToList(newTask);
            taskInput.value = '';
        }
    });

    function addTaskToList(task) {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.text;

        const deleteBtn = document.createElement('button');
       
        deleteBtn.classList.add('delete-button');
        deleteBtn.addEventListener('click', function() {
            const index = tasks.indexOf(task);
            if (index > -1) {
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                taskList.removeChild(taskItem);
            }
        });

        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }
});