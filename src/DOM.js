import {ProjectArray, Project} from "./createProjects.js";
import {Todo} from "./createTodo.js";
import binImage from "../images/archive.png";

export default function ProjectModalEventListeners() {

    const addProjects = document.querySelector("#addProjects");
    const projectDialog = document.querySelector("#projectDialog");
    const submitProjectDialog = document.querySelector("#submitProjectDialog"); 

    addProjects.addEventListener("click", () => {
        projectDialog.showModal();
    })

    submitProjectDialog.addEventListener("click", (e) => {
        e.preventDefault();
        projectDialog.close();
        AppendProjectSidebar();
    })
}


function AppendProjectSidebar(){
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
    });

    image.addEventListener("click", () => {
        sidebarProjectContainer.remove();
    })
    
}
