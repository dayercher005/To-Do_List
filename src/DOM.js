import {ProjectArray, Project, getProject} from "./ProjectObject.js";
import {Todo} from "./TodoObject.js";
import binImage from "../images/archive.png";

export {AppendProjectSidebar, ProjectModalDOM, ProjectSidebarDOM, AppendTodoCard}

const mainContent = document.querySelector("#mainContent");

const mainProjectContainer = document.createElement("div");
mainProjectContainer.classList.add("mainProjectContainer");
mainContent.appendChild(mainProjectContainer);

const mainProjectBody = document.createElement("div");
mainProjectBody.setAttribute("id", "mainProjectBody");

const addSidebarProjects = document.querySelector("#addProjects");

const projectDialog = document.querySelector("#projectDialog");
const modalProjectNameInput = document.querySelector("#modalProjectNameInput");
const submitProjectDialog = document.querySelector("#submitProjectDialog");

const todoDialog = document.querySelector("#todoDialog");
const modalTodoTitleInput = document.querySelector("#modalTodoTitleInput");
const modalTodoDescriptionInput = document.querySelector("#modalTodoDescriptionInput");
const modalTodoDateInput = document.querySelector("#modalTodoDateInput");
const modalTodoPriorityInput = document.querySelector("#modalTodoPriorityInput");
const submitTodoDialog = document.querySelector("#submitTodoDialog");

const bin = document.createElement("img");
bin.src = binImage;


function AppendProjectSidebar() {

    addSidebarProjects.addEventListener("click", () => {
        projectDialog.showModal();
    })

    return projectDialog;
}

function ProjectModalDOM() { 

    submitProjectDialog.addEventListener("click", (e) => {
        e.preventDefault();
        projectDialog.close();
        ProjectSidebarDOM();
        console.log(ProjectArray)
    })
}



function ProjectSidebarDOM() {

    const sidebarProjectContainer = document.createElement("div");
    sidebarProjectContainer.classList.add("sidebarProjectContainer");

    const sidebarProject = document.createElement("p");
    sidebarProject.classList.add("sidebarProject");
    sidebarProjectContainer.appendChild(sidebarProject);

    const ProjectList = document.querySelector("#ProjectList");
    ProjectList.appendChild(sidebarProjectContainer);

    const newProject = new Project(modalProjectNameInput.value);
    ProjectArray.push(newProject);

    ProjectArray.forEach((project) => {
        sidebarProject.textContent = `${project.name}`;
        sidebarProjectContainer.setAttribute("id", project.id);
   
    });

    sidebarProjectContainer.addEventListener("click", () => {
        ProjectArray.forEach((project) => {
            if (project.id === sidebarProjectContainer.getAttribute("id")){
                const projectClicked = project;


                mainProjectContainer.innerHTML = "";

                const mainProjectHead = document.createElement("div");
                mainProjectHead.classList.add("mainProjectHead");
                mainProjectContainer.appendChild(mainProjectHead);

                mainProjectContainer.appendChild(mainProjectBody);

                const mainProjectTitle = document.createElement("p");
                mainProjectTitle.classList.add("mainProjectTitle");
                mainProjectHead.appendChild(mainProjectTitle);

                const addTodoButton = document.createElement("button");
                addTodoButton.classList.add("addTodoButton");
                mainProjectHead.appendChild(addTodoButton);
                addTodoButton.textContent = "+ Add Todo";

                mainProjectContainer.setAttribute("id", projectClicked.id)
                mainProjectTitle.textContent = `${projectClicked.name}`;

                addTodoButton.addEventListener("click", () => {
                        todoDialog.showModal();
                })
            }
        })
   
        
    })

}

    
    




function AppendTodoCard() {
    
    submitTodoDialog.addEventListener("click", (e) => {

        e.preventDefault()

        // Cannot loop through Project Array as it affects TodoArray
        ProjectArray.forEach((project) => {
            if (project.id === mainProjectContainer.getAttribute("id")){
                const todoProjectClicked = project;

                const newTodo = new Todo(modalTodoTitleInput.value, modalTodoDescriptionInput.value, modalTodoDateInput, modalTodoPriorityInput.value);
                todoProjectClicked.TodoArray.push(newTodo);


                const TodoCard = document.createElement("div");
                TodoCard.classList.add("TodoCard")
                mainProjectContainer.appendChild(TodoCard);


                const cardTodoTitle = document.createElement("p");
                cardTodoTitle.classList.add("cardTodoTitle");
                TodoCard.appendChild(cardTodoTitle);

                const cardTodoDate = document.createElement("div");
                cardTodoDate.classList.add("cardTodoDate");
                TodoCard.appendChild(cardTodoDate);


                project.TodoArray.forEach((todo) => {

                    TodoCard.setAttribute("dataset-todo" ,todo.id);

                    todo.title = modalTodoTitleInput.value;
                    cardTodoTitle.textContent = `${todo.title}`;

                    todo.dueDate = modalTodoDateInput.value;
                    cardTodoDate.textContent = `${todo.dueDate}`;

            })
            }

            
        })

        todoDialog.close();
        console.log(ProjectArray);
    })
}
