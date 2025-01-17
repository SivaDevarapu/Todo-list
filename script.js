let taskDo = document.getElementById("input-task");
let addBtn = document.getElementById("add");
let tasksDiv = document.querySelector(".tasks");

addBtn.addEventListener("click", () => {
    console.log("Add Button clicked");

    let newTask = taskDo.value;

    if (newTask.length == 0) {
        alert("A task cannot be empty");
    } else {
        let newTaskDiv = document.createElement("div");
        newTaskDiv.classList.add("task-div");
        newTaskDiv.innerHTML = `
            <span class="taskName" style="width:350px;">${newTask}</span>
            <button class="delete">Delete</button>
            <button class="edit">Edit</button>
        `;
        tasksDiv.appendChild(newTaskDiv);
        taskDo.value = "";
    }
});

tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentNode.remove();
    }

    if (e.target.classList.contains("edit")) {
        let taskDiv = e.target.parentNode;
        let taskName = taskDiv.querySelector(".taskName");
        let currentTask = taskName.textContent;
        taskName.innerHTML = `
            <input type="text" class="change" value="${currentTask}" placeholder="Edit"/>
            <button class="done">Done</button>
        `;

        taskDiv.querySelector(".done").addEventListener("click", () => {
            let newValue = taskDiv.querySelector(".change").value;
            taskName.innerHTML = newValue;
        });
    }
});
