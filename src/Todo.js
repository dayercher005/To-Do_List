export {Todo}

export default class Todo{
    
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.id = self.crypto.randomUUID();
        this.priority = priority;
    }
}

