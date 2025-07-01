import {modalProjectNameInput} from "./DOM.js"
import {modalTodoTitleInput, modalTodoDescriptionInput, modalTodoDateInput, modalTodoPriorityInput} from "./DOM.js"
import {Todo} from "./TodoObject.js"

export {ProjectArray, Project, ProjectArrayHandler}

const ProjectArray = [];


class Project{

    constructor(name) {
        this.name = name;
        this.id = self.crypto.randomUUID();
        this.TodoArray = [];
    }

    appendTodo(){
        const newTodo = new Todo(modalTodoTitleInput.value, modalTodoDescriptionInput.value, modalTodoDateInput.value, modalTodoPriorityInput.value);
        this.TodoArray.push(newTodo);
    }

}


function ProjectArrayHandler() {

    const AppendProjectArray = () => {
        const newProject = new Project(modalProjectNameInput.value);
        ProjectArray.push(newProject);
    }
    
    const getIndividualProject = (DOM_ID) => {
        ProjectArray.forEach((project) => {
            if (DOM_ID === project.id){
                project.getID();
            }
        })
        
    }

    return {AppendProjectArray, getIndividualProject}

}


