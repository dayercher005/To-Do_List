import {modalProjectNameInput} from "./DOM.js"
import {modalTodoTitleInput, modalTodoDescriptionInput, modalTodoDateInput, modalTodoPriorityInput} from "./DOM.js"
import {Todo} from "./TodoObject.js"

export {ProjectArray, Project, ProjectArrayHandler}

let ProjectArray = [];


class Project{

    constructor(name) {
        this.name = name;
        this.id = self.crypto.randomUUID();
        this.TodoArray = [];
    }

}


function ProjectArrayHandler() {

    const AppendProjectArray = () => {
        const newProject = new Project(modalProjectNameInput.value);
        ProjectArray.push(newProject);
        StoreProjectArray();
    }
    
    const StoreProjectArray = () => {
        localStorage.setItem("TodoList", JSON.stringify(ProjectArray));
    }

    const RetrieveProjectArray = () => {
        ProjectArray = JSON.parse(localStorage.getItem("TodoList")) || [];
        return ProjectArray
    }

    return {AppendProjectArray, StoreProjectArray, RetrieveProjectArray}

}
