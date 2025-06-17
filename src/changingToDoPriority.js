import ToDoFeatures from "TodoFeatures.js";

function checkPriority(ToDoFeatures){
    if (ToDoFeatures.priority == "Urgent"){
        ToDoFeatures.priority = "Not Urgent"
    } else{
        ToDoFeatures.priority == "Urgent"
    }

    return {checkPriority}
}