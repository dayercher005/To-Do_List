

export default function ProjectButtonClick(){
    const addProject = document.querySelector("#addProjects")
    const projectInputContainer = document.createElement("div");
    const ProjectNameLabel = document.createElement("label");
    const ProjectNameInput = document.createElement("input");
    const crossProjectButton = document.createElement("button");
    const mainContent = document.querySelector("#mainContent");
    projectInputContainer.setAttribute("id", "projectInputContainer");
    projectInputContainer.setAttribute("style", "display: inline;") 
    mainContent.appendChild(projectInputContainer);
    ProjectNameLabel.setAttribute("id", "ProjectNameLabel")
    ProjectNameLabel.textContent = "Project Name: "
    ProjectNameInput.setAttribute("type", "text");
    ProjectNameInput.setAttribute("name", "ProjectNameInput");
    ProjectNameInput.setAttribute("id", "ProjectNameInput");
    crossProjectButton.textContent = "X";
    crossProjectButton.setAttribute("id", "crossProjectButton");
    projectInputContainer.append(ProjectNameLabel, ProjectNameInput, crossProjectButton);
    

    return ProjectButtonClick();
}



function AddingProjects(){
    const ProjectList = document.querySelector("#ProjectList");
    const ProjectTab = document.createElement("div");
    ProjectList.appendChild(ProjectTab);
}