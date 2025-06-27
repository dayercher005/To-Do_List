import {ProjectArray, Project} from "./ProjectObject.js";
import {Todo} from "./TodoObject.js";
import binImage from "../images/archive.png";
import editImage from "../images/edit.png";

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
                    mainProjectBody.innerHTML = "";

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

                    TodoRedisplay();

                    addTodoButton.addEventListener("click", () => {
                            todoDialog.showModal();

                })
            }
        })  
        
    })    

}




function AppendTodoCard() {

    
    submitTodoDialog.addEventListener("click", (e) => {

     
        e.preventDefault();

        // Cannot loop through Project Array as it affects TodoArray
        ProjectArray.forEach((project) => {
            if (project.id === mainProjectContainer.getAttribute("id")){
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
     
        })
        
        todoDialog.close();
    })
}

function TodoRedisplay() {
    
    

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

