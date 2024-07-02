document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');
    const priorityInput = document.getElementById('priority-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;

        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskText} (Due: ${dueDate}, Priority: ${priority})</span>
            <div class="buttons">
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
            </div>
        `;

        const completeButton = taskItem.querySelector('.complete-button');
        const deleteButton = taskItem.querySelector('.delete-button');

        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('complete');
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskList.appendChild(taskItem);

        taskInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = 'low';
    }
});