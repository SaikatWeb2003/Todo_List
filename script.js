function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    let li = document.createElement("li");
    li.innerHTML = `<span onclick="toggleComplete(this)">${taskText}</span> <button class="delete" onclick="removeTask(this)">X</button>`;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
function removeTask(button) {
    button.parentElement.remove();
}
function toggleComplete(task) {
    task.parentElement.classList.toggle("completed");
}