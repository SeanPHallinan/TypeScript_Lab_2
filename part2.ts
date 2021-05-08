let tasks: string[]=[];

function addTask(task:string): number{
    tasks.push(task);
    console.log("___________New Task Added__________");
    console.log("Task " +task+ "  inserted");
    return tasks.length;
}

function lidtAllTasks():void{
    console.log("Start: ALL items in Array: ")
    tasks.forEach(function(task){
        console.log(task);
    })
    console.log("End: ALL items in Array: ")
}

function deleteTask(task:string):number{
    let index:number = tasks.indexOf(task);
    if(index > -1){
        tasks.splice(index,1);
        console.log("______Task Removed________")
        console.log("Task "+task+ "Removed")
    }
    return tasks.length;
}

let x :number = addTask('Wake up');
console.log("Num of items is "+x);
addTask('Sleep');

lidtAllTasks();

deleteTask('Sleep')