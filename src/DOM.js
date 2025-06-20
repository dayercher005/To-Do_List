
export default function ProjectModalEventListeners() {

    const addProjects = document.querySelector("#addProjects");
    const projectDialog = document.querySelector("#projectDialog");
    const submitProjectDialog = document.querySelector("#submitProjectDialog"); 
    const ProjectList = document.querySelector("#ProjectList")

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
    const sidebarProject = document.createElement("div");
    sidebarProject.textContent = ".";
    ProjectList.appendChild(sidebarProject);
}