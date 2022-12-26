const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo);

function addTodo(event){
    //preevnt form from submitting
    event.preventDefault();
    
    const todoDiv  = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to  do list
    todoList.appendChild(todoDiv);
    //clear input value;
    todoInput.value='';

}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animatation
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
      
    }

    //check mark
    if(item.classList[0]==="complete-btn"){
        const todo =item.parentElement;
        todo.classList.toggle("completed");
    }
    
}

function filterTodo(e){
    const todos = todoList.childNodes;

    
    todos.forEach((todo)=>{
        const value = e.target.value;
        switch(value){
            case "all":
                todo.style.display = 'block';
    //             break;
    //         case "completed":
    //             if(todo.classList.contains("completed")){
    //                 todo.style.display = "flex";
    //             } else {
    //                 todo.style.display = "none";
    //             }
         }
    })
}