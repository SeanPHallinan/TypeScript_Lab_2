import { todoInterface } from './todointerface';

class Todo implements todoInterface{

    constructor(){}
    tasks: Array<string> = [];

    addTask(task:string): number{
        this.tasks.push(task);
        console.log("___________New Task Added__________");
        console.log("Task " +task+ "  inserted");
        return this.tasks.length;
    }

    listAllItems():void{
        console.log("Start: ALL items in Array: ")
        this.tasks.forEach(function(task){
            console.log(task);
        })
        console.log("End: ALL items in Array: ")
    }

    deleteTask(task:string):number{
        let index:number = this.tasks.indexOf(task);
        if(index > -1){
            this.tasks.splice(index,1);
            console.log("______Task Removed________")
            console.log("Task "+task+ "Removed")
        }
        return this.tasks.length;
    }
}

let myTodos = new Todo();
myTodos.addTask('eat');
myTodos.addTask('Sleep');
myTodos.listAllItems();
myTodos.deleteTask('Sleep');