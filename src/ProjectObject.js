export {ProjectArray, Project}

const ProjectArray = [];

class Project{

    constructor(name) {
        this.name = name;
        this.id = self.crypto.randomUUID();
        this.TodoArray = [];
    }

    getTodo(todoID){
        this.TodoArray.forEach((todo) => {
            if(todo.id == todoID){
                return todo;
            }
        })
    }

    deleteTodo(todoID) {
        this.TodoArray.forEach((todo) => {
            if(todo.id == todoID){
                const todoIndex = this.todos.indexOf(todo);
                this.todos.splice(index, 1);
            }
        })
    }

    addTodo(todo) {
        this.TodoArray.push(todo);
    }

} 

