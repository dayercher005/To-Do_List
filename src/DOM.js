import {ProjectArray, Project} from "./Projects.js";
import {Todo} from "./Todo.js";
import binImage from "../images/archive.png";

const mainContent = document.querySelector("#mainContent");
const submitProjectDialog = document.querySelector("#submitProjectDialog"); 
const addSidebarProjects = document.querySelector("#addProjects");
const projectDialog = document.querySelector("#projectDialog");
const todoDialog = document.querySelector("#todoDialog");
const modalProjectNameInput = document.querySelector("#modalProjectNameInput");
const bin = document.createElement("img");
bin.src = binImage;


export function AppendProjectSidebar() {

    addSidebarProjects.addEventListener("click", () => {
        projectDialog.showModal();
    })

    return projectDialog;
}

export function ProjectModalDOM() { 

    submitProjectDialog.addEventListener("click", (e) => {
        e.preventDefault();
        projectDialog.close();
        ProjectSidebarDOM();
        MainProjectDOM();
    })
}



export function ProjectSidebarDOM() {

    const sidebarProjectContainer = document.createElement("div");
    sidebarProjectContainer.classList.add("sidebarProjectContainer");

    const sidebarProject = document.createElement("p");
    sidebarProject.classList.add("sidebarProject");
    sidebarProjectContainer.appendChild(sidebarProject);

    const ProjectList = document.querySelector("#ProjectList");
    ProjectList.appendChild(sidebarProjectContainer);

    const newProject = new Project(name);
    ProjectArray.push(newProject);

    ProjectArray.forEach((project) => {
        project.name = modalProjectNameInput.value;
        sidebarProject.textContent = `${project.name}`;
        sidebarProjectContainer.setAttribute("dataset-object", `a${project.id}`);
   
    });

    
}

function MainProjectDOM() {
    
    const mainProjectContainer = document.createElement("div");
    mainProjectContainer.classList.add("mainProjectContainer");
    mainContent.appendChild(mainProjectContainer);

    const mainProjectHead = document.createElement("div");
    mainProjectHead.classList.add("mainProjectHead");
    mainProjectContainer.appendChild(mainProjectHead);

    const mainProjectTitle = document.createElement("p");
    mainProjectTitle.classList.add("mainProjectTitle");
    mainProjectHead.appendChild(mainProjectTitle);

    const addTodoButton = document.createElement("button");
    addTodoButton.classList.add("addTodoButton");
    mainProjectHead.appendChild(addTodoButton);
    addTodoButton.textContent = "+ Add Todo"
    

    const newProject = new Project(name);
    ProjectArray.push(newProject);

    ProjectArray.forEach((project) => {
        mainProjectContainer.setAttribute("dataset-object", project.id);
        project.name = modalProjectNameInput.value
        mainProjectTitle.textContent = `${project.name}`;
        console.log(mainProjectTitle);

        addTodoButton.addEventListener("click", () => {
            todoDialog.showModal();

        })

    })


}

function TodoDOM() {
    
}
