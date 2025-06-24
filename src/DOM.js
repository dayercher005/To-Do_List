import {ProjectArray, Project} from "./Projects.js";
import {Todo} from "./Todo.js";
import binImage from "../images/archive.png";

export {AppendProjectSidebar, ProjectModalDOM, ProjectSidebarDOM, MainProjectDOM, AppendTodoCard}

const mainContent = document.querySelector("#mainContent");

const mainProjectContainer = document.createElement("div");
mainProjectContainer.classList.add("mainProjectContainer");
mainContent.appendChild(mainProjectContainer);

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
        MainProjectDOM();
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
        project.name = modalProjectNameInput.value;
        sidebarProject.textContent = `${project.name}`;
        sidebarProjectContainer.setAttribute("dataset-object", `a${project.id}`);
   
    });

    
}

function MainProjectDOM() {

    mainProjectContainer.innerHTML = "";

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


function AppendTodoCard() {
    
    submitTodoDialog.addEventListener("click", (e) => {

        e.preventDefault()

        ProjectArray.forEach((project) => {
            const newTodo = new Todo(modalTodoTitleInput.value, modalTodoDescriptionInput.value, modalTodoDateInput, modalTodoPriorityInput.value);
            project.TodoArray.push(newTodo);

            project.TodoArray.forEach((todo) => {

                const TodoCard = document.createElement("div");
                mainProjectContainer.appendChild(TodoCard);


                const cardTodoTitle = document.createElement("p");
                TodoCard.appendChild(cardTodoTitle);

                const cardTodoDate = document.createElement("div");
                TodoCard.appendChild(cardTodoDate);


                todo.title = modalTodoTitleInput.value;
                cardTodoTitle.textContent = `${todo.title}`;

                todo.dueDate = modalTodoDateInput.value;
                cardTodoDate.textContent = `${todo.dueDate}`;

            })
        })

        todoDialog.close();
    })
}
