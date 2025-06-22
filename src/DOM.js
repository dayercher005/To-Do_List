import {ProjectArray, Project} from "./createProjects.js";
import {Todo} from "./createTodo.js";
import binImage from "../images/archive.png";
import ProjectFunction from "./logic.js";

const mainContent = document.querySelector("#mainContent");
const submitProjectDialog = document.querySelector("#submitProjectDialog"); 
const addSidebarProjects = document.querySelector("#addProjects");
const projectDialog = document.querySelector("#projectDialog");

export function ProjectModalEventListeners() { 

    submitProjectDialog.addEventListener("click", (e) => {
        e.preventDefault();
        projectDialog.close();
        renderSidebarProject();
    })
}

export function StaticSidebarEventListeners(){

    addSidebarProjects.addEventListener("click", () => {
        projectDialog.showModal();
    })

    return projectDialog;
}



function renderSidebarProject(){

    const sidebarProjectContainer = document.createElement("div");
    sidebarProjectContainer.classList.add("sidebarProjectContainer");
    const image = document.createElement("img");
    image.src = binImage;
    const sidebarProject = document.createElement("p");
    sidebarProject.classList.add("sidebarProject");
    sidebarProjectContainer.appendChild(sidebarProject)
    sidebarProjectContainer.appendChild(image);
    const ProjectList = document.querySelector("#ProjectList");
    ProjectList.appendChild(sidebarProjectContainer);

    const modalProjectNameInput = document.querySelector("#modalProjectNameInput");
    const newProject = new Project(name);
    ProjectArray.push(newProject);

    ProjectArray.forEach((project) => {
        project.name = modalProjectNameInput.value;
        sidebarProject.textContent = `${project.name}`;
        sidebarProjectContainer.setAttribute("dataset-object-Id", project.id);
    });
    console.log(ProjectArray);

    image.addEventListener("click", () => {
        sidebarProjectContainer.remove();
    })
    
}
        
