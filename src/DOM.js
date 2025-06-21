import {ProjectArray, Project} from "./createProjects.js";
import {Todo} from "./createTodo.js";
import binImage from "../images/archive.svg";

export default function ProjectModalEventListeners() {

    const addProjects = document.querySelector("#addProjects");
    const projectDialog = document.querySelector("#projectDialog");
    const submitProjectDialog = document.querySelector("#submitProjectDialog"); 

    addProjects.addEventListener("click", () => {
        projectDialog.showModal();
    })

    submitProjectDialog.addEventListener("click", (e) =>{
        e.preventDefault();
        projectDialog.close();
        AppendProjectSidebar();
    })
}


function AppendProjectSidebar(){
    const ProjectList = document.querySelector("#ProjectList");
    const modalProjectNameInput = document.querySelector("#modalProjectNameInput");
    const sidebarProject = document.createElement("div");
    sidebarProject.classList.add("sidebarProject");
    const newProject = new Project(name);
    ProjectArray.push(newProject);

    ProjectArray.forEach((project) => {
        project.name = modalProjectNameInput.value;
        sidebarProject.textContent = `${project.name}`;
    });
    
  
    ProjectList.appendChild(sidebarProject);
}

function ProjectSidebarLayout () {
    const image = document.createElement("img");
    image.src = binImage;
}

