function getItem(item) {
    return document.querySelector(item);
}

function addTodo(todoText) {
    if (todoText != "") {
        const div = document.createElement("div");
        div.classList.add("form-check");

        const input = document.createElement("input");
        input.type = 'checkbox';
        input.classList.add("form-check-input");
        input.onclick = function () {
            return checkTodo(this);
        }

        const label = document.createElement("label");
        label.classList.add("form-check-label");

        const textItem = document.createTextNode(todoText); //Texto criado

        label.appendChild(textItem);
        div.appendChild(input);
        div.appendChild(label);

        const listItem = document.createElement("li"); // <li></li>
        listItem.appendChild(div); //<li>mais uma tarefa</li>
        listItem.classList.add("list-group-item");

        const todoList = getItem("#todo-list");
        todoList.appendChild(listItem); //<ul>.....<li>mais uma tarefa</li></ul>
    }
}

const inputTodo = getItem("#input-todo");

inputTodo.addEventListener("keydown", (evento) => {
    if (evento.code == 'Enter') {
        addTodo(inputTodo.value);
        inputTodo.value = "";
    }
});

const btnAddTodo = getItem("#btn-add-todo");
btnAddTodo.addEventListener("click", (evento) => {
    const inputValue = inputTodo.value;
    addTodo(inputValue);
    inputTodo.value = "";
});


function checkTodo(checkbox) {
    const label = checkbox.nextElementSibling;

    if (checkbox.checked == true) {
        label.classList.add("todo-done");
    } else {
        label.classList.remove("todo-done");
    }
}
