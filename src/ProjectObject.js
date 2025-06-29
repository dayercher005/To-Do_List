import {modalProjectNameInput} from "./DOM.js"

export {ProjectArray, Project, ProjectArrayHandler}

const ProjectArray = [];


class Project{

    constructor(name) {
        this.name = name;
        this.id = self.crypto.randomUUID();
        this.TodoArray = [];
    }

    getID(){
        return this.id
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


