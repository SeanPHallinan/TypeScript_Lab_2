var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("___________New Task Added__________");
    console.log("Task " + task + "  inserted");
    return tasks.length;
}
function lidtAllTasks() {
    console.log("Start: ALL items in Array: ");
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End: ALL items in Array: ");
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("______Task Removed________");
        console.log("Task " + task + "Removed");
    }
    return tasks.length;
}
addTask('Wake up');
addTask('Sleep');
lidtAllTasks();
deleteTask('Sleep');
