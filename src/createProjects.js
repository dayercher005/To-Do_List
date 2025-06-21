export {ProjectArray, Project}

const ProjectArray = [];

export default class Project{

    constructor(name) {
        this.name = name;
        this.id = crypto.randomUUID;
        this.TodoArray = [];
    }
} 
