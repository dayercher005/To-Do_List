import {ProjectArray, Project} from "./createProjects.js";
import {Todo} from "./createTodo.js";

export default function ProjectFunction(){
    const AppendingProject = () => {
        const newProject = Project(name);
        ProjectArray.push(newProject);
    }

    return {AppendingProject}
};