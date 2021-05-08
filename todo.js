"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("___________New Task Added__________");
        console.log("Task " + task + "  inserted");
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("Start: ALL items in Array: ");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End: ALL items in Array: ");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("______Task Removed________");
            console.log("Task " + task + "Removed");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask('eat');
myTodos.addTask('Sleep');
myTodos.listAllTasks();
myTodos('Sleep');
