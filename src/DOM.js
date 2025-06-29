import {ProjectArray, Project, ProjectArrayHandler} from "./ProjectObject.js";
import {Todo} from "./TodoObject.js";
import binImage from "../images/archive.png";
import editImage from "../images/edit.png";

export {modalProjectNameInput}
export {TodoListEventListeners}

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



function ShowProjectModal() {

    projectDialog.showModal();
    
}

function CloseProjectModal() { 

    projectDialog.close();
   
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
                }
            })
        })
    }

    return {ProjectSidebarDisplay, ProjectSidebarArray, ProjectSidebarAttribute, ProjectSidebarClicker}

            

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
            todoDialog.showModal();

        })
    }

    return {MainProjectDisplay, mainProjectContainer, mainProjectTitle, MainProjectClicker}

}



function AppendTodoCard() {

    const mainProject = MainProject();
    

        // Cannot loop through Project Array as it affects TodoArray
        ProjectArray.forEach((project) => {
            if (project.id === mainProject.mainProjectContainer.getAttribute("dataset-project")){
                const todoProjectClicked = project;

                const newTodo = new Todo(modalTodoTitleInput.value, modalTodoDescriptionInput.value, modalTodoDateInput.value, modalTodoPriorityInput.value);
                todoProjectClicked.TodoArray.push(newTodo);


                const TodoCard = document.createElement("div");
                TodoCard.classList.add("TodoCard")
                mainProjectBody.appendChild(TodoCard);

                const TodoCardContent = document.createElement("div");
                TodoCardContent.classList.add("TodoCardContent");
                TodoCard.appendChild(TodoCardContent);


                const cardTodoTitle = document.createElement("p");
                cardTodoTitle.classList.add("cardTodoTitle");
                TodoCardContent.appendChild(cardTodoTitle);

                const cardTodoDate = document.createElement("div");
                cardTodoDate.classList.add("cardTodoDate");
                TodoCardContent.appendChild(cardTodoDate);

                const todoCheckbox = document.createElement("input");
                todoCheckbox.setAttribute("type", "checkbox");      
                TodoCardContent.appendChild(todoCheckbox);

                const TodoSVGs = document.createElement("div");
                TodoSVGs.classList.add("TodoSVGs");
                TodoCard.appendChild(TodoSVGs);
            
                const bin = document.createElement("img");
                bin.src = binImage;
                bin.classList.add("svg");
                TodoSVGs.appendChild(bin);
            
                const edit = document.createElement("img");
                edit.src = editImage;
                edit.classList.add("svg");
                TodoSVGs.appendChild(edit);

                if (todoCheckbox.checked) {
                cardTodoTitle.style.textDecoration = "line-through";
                cardTodoDate.style.textDecoration = "line-through";
                }

                bin.addEventListener("click", () => {
                ProjectArray.forEach((project) =>{
                    if (project.id === mainProject.mainProjectContainer.getAttribute("dataset-project")){
                        const currentProject = project;

                        currentProject.TodoArray.forEach((todo) => {
                            if(todo.id === bin.getAttribute("id")){
                                const currentTodo = todo;
                                const currentTodoIndex = currentProject.TodoArray.indexOf(currentTodo)
                                currentProject.TodoArray.splice(1, currentTodoIndex);
                                
                                }
                            })
                        }
                    })
                
                })

                todoProjectClicked.TodoArray.forEach((todo) => {

                    TodoCard.setAttribute("id" ,todo.id);
                    
                    cardTodoTitle.textContent = `Title: ${todo.title}`;
    
                    cardTodoDate.textContent = `Due Date: ${todo.dueDate}`;

                    if (todo.priority === "Urgent"){
                        TodoCard.style.borderLeft = "10px solid hsl(0, 98%, 55%)";
                    } else if(todo.priority === "Not Urgent") {
                        TodoCard.style.borderLeft = "10px solid hsl(126, 98.30%, 55.10%)";
                    }

                })

            }
     
       
        
        todoDialog.close();
    })
}

function TodoRedisplay() {
    
    const mainProject = MainProject();

    ProjectArray.forEach((project) =>{
        if (project.id === mainProjectContainer.getAttribute("id")){
            const currentProject = project;

        currentProject.TodoArray.forEach((todo) => {
            const TodoCard = document.createElement("div");
            TodoCard.classList.add("TodoCard")
            mainProjectContainer.appendChild(TodoCard);

            const TodoCardContent = document.createElement("div");
            TodoCardContent.classList.add("TodoCardContent");
            TodoCard.appendChild(TodoCardContent);

            const cardTodoTitle = document.createElement("p");
            cardTodoTitle.classList.add("cardTodoTitle");
            TodoCardContent.appendChild(cardTodoTitle);

            const cardTodoDate = document.createElement("div");
            cardTodoDate.classList.add("cardTodoDate");
            TodoCardContent.appendChild(cardTodoDate);

            const todoCheckbox = document.createElement("input");
            todoCheckbox.setAttribute("type", "checkbox");      
            TodoCardContent.appendChild(todoCheckbox);

            const TodoSVGs = document.createElement("div");
            TodoSVGs.classList.add("TodoSVGs");
            TodoCard.appendChild(TodoSVGs);

            const bin = document.createElement("img");
            bin.src = binImage;
            bin.classList.add("svg");
            bin.setAttribute("id", todo.id)
            TodoSVGs.appendChild(bin);
            
            const edit = document.createElement("img");
            edit.src = editImage;
            edit.classList.add("svg");
            edit.setAttribute("id", todo.id)
            TodoSVGs.appendChild(edit);

            cardTodoTitle.textContent = `Title: ${todo.title}`;

            cardTodoDate.textContent = `Due Date: ${todo.dueDate}`;
            console.log(currentProject.TodoArray)

            if (todo.priority === "Urgent") {
                TodoCard.style.borderLeft = "10px solid hsl(0, 98%, 55%)";
            } else if (todo.priority === "Not Urgent"){
                TodoCard.style.borderLeft = "10px solid hsl(126, 98.30%, 55.10%)";
            }

            if (todoCheckbox.checked) {
                cardTodoTitle.style.textDecoration = "line-through";
                cardTodoDate.style.textDecoration = "line-through";
            }

            bin.addEventListener("click", () => {
            ProjectArray.forEach((project) =>{
                if (project.id === mainProjectContainer.getAttribute("id")){
                    const currentProject = project;

                    currentProject.TodoArray.forEach((todo) => {
                        if(todo.id === bin.getAttribute("id")){
                            const currentTodo = todo;
                            const currentTodoIndex = currentProject.TodoArray.indexOf(currentTodo)
                            currentProject.TodoArray.splice(1, currentTodoIndex);
                            }
                        })
                    }
                })
            
            })

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
        console.log(ProjectArray);
        
    });


    submitTodoDialog.addEventListener("click", (e) => {
        e.preventDefault();
        AppendTodoCard();

        console.log(ProjectArray)
    })
    

}
