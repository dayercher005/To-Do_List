export {Todo}

class Todo{
    
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = self.crypto.randomUUID();
    }

}

    

