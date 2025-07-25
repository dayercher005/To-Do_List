import {ProjectArray, ProjectArrayHandler} from "./ProjectObject.js";
import binImage from "../images/archive.png";
import editImage from "../images/edit.png";
import {Todo} from "./TodoObject.js"

export {modalProjectNameInput, modalTodoTitleInput, modalTodoDescriptionInput, modalTodoDateInput, modalTodoPriorityInput}
export {StorageRetriever, TodoListEventListeners}

const mainContent = document.querySelector("#mainContent");


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

const todoEditDialog = document.querySelector("#todoEditDialog");
const modalEditTodoTitleInput = document.querySelector("#modalEditTodoTitleInput");
const modalEditTodoDescriptionInput = document.querySelector("#modalEditTodoDescriptionInput");
const modalEditTodoDateInput = document.querySelector("#modalEditTodoDateInput");
const modalEditTodoPriorityInput = document.querySelector("#modalEditTodoPriorityInput");
const submitEditTodoDialog = document.querySelector("#submitEditTodoDialog");


function StorageRetriever() {
    const newProject = ProjectArrayHandler();
    const updatedProjectArray = newProject.RetrieveProjectArray();
    
    updatedProjectArray.forEach((project) => {
        const ProjectSidebarStorage = ProjectSidebar();
        
        ProjectSidebarStorage.sidebarProjectText.textContent = project.name;
        ProjectSidebarStorage.sidebarProjectContainer.setAttribute("dataset-project", project.id);

        ProjectSidebarStorage.ProjectSidebarDisplay();

        ProjectSidebarStorage.ProjectSidebarClicker();

    })
}

function ShowProjectModal() {

    projectDialog.showModal();
    
}

function CloseProjectModal() { 

    projectDialog.close();
   
}

function ShowTodoModal() {

    todoDialog.showModal();

}

function CloseTodoModal() {

    todoDialog.close();

}

function ShowTodoEditModal() {

    todoEditDialog.showModal();

}

function CloseTodoEditModal() {

    todoEditDialog.close();

}


function ProjectSidebar() {

    const sidebarProjectContainer = document.createElement("div");
    sidebarProjectContainer.classList.add("sidebarProjectContainer");

    const sidebarProjectText = document.createElement("p");
    sidebarProjectText.classList.add("sidebarProject");

    const ProjectSidebarDisplay = () => {

        sidebarProjectContainer.appendChild(sidebarProjectText);

        const ProjectList = document.querySelector("#ProjectList");
        ProjectList.appendChild(sidebarProjectContainer);

        };


    const ProjectSidebarArray = () => {
        const newProject = ProjectArrayHandler();
        newProject.AppendProjectArray();
    }

    const ProjectSidebarAttribute = () => {
        
        ProjectArray.forEach((project) => {
            sidebarProjectText.textContent = project.name;
            sidebarProjectContainer.setAttribute("dataset-project", project.id);
        })
    }


    const ProjectSidebarClicker = () => {

        sidebarProjectContainer.addEventListener("click", () => {
            ProjectArray.forEach((project) => {
                if (project.id === sidebarProjectContainer.getAttribute("dataset-project")){
                    const currentProject = project

                    const mainProject = MainProject();
                    mainProject.mainProjectContainer.setAttribute("dataset-project", currentProject.id);
                    mainProject.mainProjectTitle.textContent = currentProject.name;
                    mainProject.MainProjectDisplay();
                    mainProject.MainProjectClicker();
                
                    currentProject.TodoArray.forEach((todo) => {
                        const currentTodoRedisplay = AppendTodoCard();

                        currentTodoRedisplay.TodoCardDisplay();
                        currentTodoRedisplay.TodoCard.setAttribute("id" ,todo.id);

                        currentTodoRedisplay.cardTodoTitle.setAttribute("dataset-title", todo.id);

                        currentTodoRedisplay.cardTodoDate.setAttribute("dataset-date", todo.id);

                        currentTodoRedisplay.bin.setAttribute("id", todo.id);

                        currentTodoRedisplay.edit.setAttribute("id", todo.id);

                        currentTodoRedisplay.cardTodoTitle.textContent = `Title: ${todo.title}`;
        
                        currentTodoRedisplay.cardTodoDate.textContent = `Due Date: ${todo.dueDate}`;

                        if (todo.priority === "Urgent"){
                            currentTodoRedisplay.TodoCard.style.borderLeft = "10px solid hsl(0, 98%, 55%)";
                        } else if (todo.priority === "Not Urgent") {
                            currentTodoRedisplay.TodoCard.style.borderLeft = "10px solid hsl(126, 98.30%, 55.10%)";
                        }

                        currentTodoRedisplay.TodoFunctionality();
                    })
                }
            })
        })
    }

    return {ProjectSidebarDisplay, ProjectSidebarArray, ProjectSidebarAttribute, ProjectSidebarClicker, sidebarProjectContainer, sidebarProjectText}

            

}


function MainProject() {

    const mainProjectContainer = document.createElement("div");
    mainProjectContainer.classList.add("mainProjectContainer");

    const mainProjectHead = document.createElement("div");
    mainProjectHead.classList.add("mainProjectHead");

    const mainProjectBody = document.createElement("div");
    mainProjectBody.setAttribute("id", "mainProjectBody");

    const mainProjectTitle = document.createElement("p");
    mainProjectTitle.classList.add("mainProjectTitle");

    const addTodoButton = document.createElement("button");
    addTodoButton.classList.add("addTodoButton");


    const MainProjectDisplay = () => {

        mainContent.innerHTML = "";

        mainContent.appendChild(mainProjectContainer);

        mainProjectContainer.appendChild(mainProjectHead);

        mainProjectContainer.appendChild(mainProjectBody);

        mainProjectHead.appendChild(mainProjectTitle);

        mainProjectHead.appendChild(addTodoButton);
        addTodoButton.textContent = "+ Add Todo";

    }

    const MainProjectClicker = () => {

        addTodoButton.addEventListener("click", () => {

            ShowTodoModal();

            modalTodoTitleInput.value = "";
            modalTodoDescriptionInput.value = "";
            modalTodoDateInput.value = "";
            modalTodoPriorityInput.value = "Urgent";

        })
    }

    return {MainProjectDisplay, mainProjectContainer, mainProjectTitle, mainProjectBody, MainProjectClicker}

}



function AppendTodoCard() {

        const currentProjectBody = document.querySelector("#mainProjectBody");
        const currentProjectContainer = document.querySelector(".mainProjectContainer");

        const TodoCard = document.createElement("div");
        TodoCard.classList.add("TodoCard")

        const TodoCardContent = document.createElement("div");
        TodoCardContent.classList.add("TodoCardContent");

        const cardTodoTitle = document.createElement("span");
        cardTodoTitle.classList.add("cardTodoTitle");

        const cardTodoDate = document.createElement("span");
        cardTodoDate.classList.add("cardTodoDate");

        const todoCheckbox = document.createElement("input");
        todoCheckbox.classList.add("todoCheckbox");
        todoCheckbox.setAttribute("type", "checkbox");      

        const TodoSVGs = document.createElement("div");
        TodoSVGs.classList.add("TodoSVGs");
            
        const bin = document.createElement("img");
        bin.src = binImage;
        bin.classList.add("svg");
            
        const edit = document.createElement("img");
        edit.src = editImage;
        edit.classList.add("svg");


        const TodoCardDisplay = () => {

            currentProjectBody.appendChild(TodoCard);

            TodoCard.appendChild(TodoCardContent);

            TodoCardContent.appendChild(cardTodoTitle);

            TodoCardContent.appendChild(cardTodoDate);
   
            TodoCardContent.appendChild(todoCheckbox);

            TodoCard.appendChild(TodoSVGs);
            
            TodoSVGs.appendChild(bin);

            TodoSVGs.appendChild(edit);

        }

        const AppendTodoArray = () => {
            ProjectArray.forEach((project) => {
            if (project.id === currentProjectContainer.getAttribute("dataset-project")){
                const currentProject = project

                const newTodo = new Todo(modalTodoTitleInput.value, modalTodoDescriptionInput.value, modalTodoDateInput.value, modalTodoPriorityInput.value);
                currentProject.TodoArray.push(newTodo);

                currentProject.TodoArray.forEach((todo) => {

                    TodoCard.setAttribute("id" ,todo.id);

                    cardTodoTitle.setAttribute("dataset-title", todo.id);

                    cardTodoDate.setAttribute("dataset-date", todo.id);

                    bin.setAttribute("id", todo.id);

                    edit.setAttribute("id", todo.id);

                    cardTodoTitle.textContent = `Title: ${todo.title}`;
    
                    cardTodoDate.textContent = `Due Date: ${todo.dueDate}`;

                    if (todo.priority === "Urgent"){
                        TodoCard.style.borderLeft = "10px solid hsl(0, 98%, 55%)";
                    } else if (todo.priority === "Not Urgent") {
                        TodoCard.style.borderLeft = "10px solid hsl(126, 98.30%, 55.10%)";
                    }

                    TodoFunctionality();
                    
                })
            
            }
                }
            )
        }
        

        const TodoFunctionality = () => {
            let currentBoolean = true

            todoCheckbox.addEventListener("click", () => {

                if (currentBoolean == true){
                    cardTodoDate.style.textDecoration = "line-through";
                    cardTodoTitle.style.textDecoration = "line-through";
                    currentBoolean = false
                } else if (currentBoolean == false) {
                    cardTodoDate.style.textDecoration = "none";
                    cardTodoTitle.style.textDecoration = "none";
                    currentBoolean = true
                }
            })

            bin.addEventListener("click", () => {
                ProjectArray.forEach((project) =>{
                    if (project.id === currentProjectContainer.getAttribute("dataset-project")){
                        const currentProject = project;

                        currentProject.TodoArray.forEach((todo) => {
                            if(todo.id === bin.getAttribute("id")){
                                const currentTodo = todo;
                                const currentTodoIndex = currentProject.TodoArray.indexOf(currentTodo)
                                currentProject.TodoArray.splice(currentTodoIndex, 1);
                                

                                const currentTodoDOM = document.querySelector(`div[id = "${bin.id}"]`)
                                currentProjectBody.removeChild(currentTodoDOM);

                                const StorageProjectArray = ProjectArrayHandler();
                                StorageProjectArray.StoreProjectArray();
                                
                            }
                        })

                        
                        
                    }
                })
                
            })

            edit.addEventListener("click", (e) => {
                e.preventDefault();
                
                ProjectArray.forEach((project) =>{
                    if (project.id === currentProjectContainer.getAttribute("dataset-project")){
                        const currentProject = project;
                        
                        currentProject.TodoArray.forEach((todo) => {
                            if (todo.id === edit.id){
                                const currentTodo = todo;
                            
                                ShowTodoEditModal();

                                modalEditTodoTitleInput.value = `${currentTodo.title}`;
                                modalEditTodoDescriptionInput.value = `${currentTodo.description}`;
                                modalEditTodoDateInput.value = `${currentTodo.dueDate}`;
                                modalTodoPriorityInput.value = `${currentTodo.priority}`;

                                const currentTodoCard = document.querySelector(`div[id="${edit.id}"]`)

                                const currentTodoTitle = document.querySelector(`span[dataset-title ="${edit.id}"]`);

                                const currentTodoDate = document.querySelector(`span[dataset-date="${edit.id}"]`);

                                submitEditTodoDialog.addEventListener("click", (e) => {
                                    e.preventDefault();

                                    currentTodo.title = modalEditTodoTitleInput.value;
                                    currentTodo.description = modalEditTodoDescriptionInput.value;
                                    currentTodo.dueDate = modalEditTodoDateInput.value;
                                    currentTodo.priority = modalEditTodoPriorityInput.value;

                                    currentTodoTitle.textContent = `Title: ${modalEditTodoTitleInput.value}`;
                                    currentTodoDate.textContent = `Due Date: ${modalEditTodoDateInput.value}`;

                                    if (currentTodo.priority === "Urgent"){
                                        currentTodoCard.style.borderLeft = "10px solid hsl(0, 98%, 55%)";
                                    } else if (currentTodo.priority === "Not Urgent") {
                                        currentTodoCard.style.borderLeft = "10px solid hsl(126, 98.30%, 55.10%)";
                                    }

                                    const StorageProjectArray = ProjectArrayHandler();
                                    StorageProjectArray.StoreProjectArray();

                                    CloseTodoEditModal();
                                
                                })
                            }
                        })
                    }
                })
            })
        }
    
        

    return {TodoCardDisplay, AppendTodoArray, TodoFunctionality, TodoCard, cardTodoTitle, cardTodoDate, bin, edit}
}

function TodoRedisplay() {

    ProjectArray.forEach((project) =>{
        if (project.id === mainProjectContainer.getAttribute("id")){
            const currentProject = project;

            currentProject.TodoArray.forEach((todo) => {
                const TodoCardRedisplay = AppendTodoCard();
                TodoCardRedisplay.TodoCardDisplay();
                TodoCardRedisplay.AppendTodoArray();

            })
                
            
        }
    })
}


function TodoListEventListeners() {

    addSidebarProjects.addEventListener("click", (e) => {
        e.preventDefault();
        ShowProjectModal();
    });

    submitProjectDialog.addEventListener("click", (e) => {
        e.preventDefault();
        CloseProjectModal();
        const projectSidebar = ProjectSidebar();
        projectSidebar.ProjectSidebarArray();
        projectSidebar.ProjectSidebarDisplay();
        projectSidebar.ProjectSidebarAttribute();
        projectSidebar.ProjectSidebarClicker();
        const StorageProjectArray = ProjectArrayHandler();
        StorageProjectArray.StoreProjectArray();
    });


    submitTodoDialog.addEventListener("click", (e) => {
        e.preventDefault();
        CloseTodoModal();
        const todoCard = AppendTodoCard();
        todoCard.AppendTodoArray();
        todoCard.TodoCardDisplay();   
        const StorageProjectArray = ProjectArrayHandler();
        StorageProjectArray.StoreProjectArray();
    })
 
}