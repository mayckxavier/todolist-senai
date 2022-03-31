function getItem(item) {
    return document.querySelector(item);
}

const btnAddTodo = getItem("#btn-add-todo");
btnAddTodo.addEventListener("click", (evento) => {
    const inputTodo = getItem("#input-todo");
    const inputValue = inputTodo.value;

    console.log(inputValue);
    if (inputValue == "") {
        console.log("String vazia");
    } else {
        const todoList = getItem("#todo-list");

        const listItem = document.createElement("li"); // <li></li>
        const textItem = document.createTextNode(inputValue); //Texto criado
    
        listItem.appendChild(textItem); //<li>mais uma tarefa</li>
        listItem.classList.add("list-group-item");

        todoList.appendChild(listItem); //<ul>.....<li>mais uma tarefa</li></ul>
        inputTodo.value = "";
    }
});


