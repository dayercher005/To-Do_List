class Todo{
    
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = () => {
            if (priority == "Urgent"){
                priority = "Not Urgent"
            } else {
                priority = "Urgent"
            }
        }
    }
}