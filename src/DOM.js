import {ProjectArray, Project} from "./createProjects.js"

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

// export default function CreateProjectElements(){   
// }

function AppendProjectSidebar(){
    const ProjectList = document.querySelector("#ProjectList");
    const modalProjectNameInput = document.querySelector("#modalProjectNameInput");
    const sidebarProject = document.createElement("div");
    const newProject = new Project(name);
    ProjectArray.push(newProject);

    ProjectArray.forEach((project) => {
        project.name = modalProjectNameInput.value;
        sidebarProject.textContent = `${project.name}`;
    })
    
  
    ProjectList.appendChild(sidebarProject);
}