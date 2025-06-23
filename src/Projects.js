export {ProjectArray, Project}

const ProjectArray = [];

class Project{

    constructor(name) {
        this.name = name;
        this.id = crypto.randomUUID;
        this.TodoArray = [];
    }
} 



