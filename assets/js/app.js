const storage = window.localStorage;

function getItem(item) {
    return document.querySelector(item);
}

function saveTodo(todo) {
    const savedTodoList = JSON.parse(storage.getItem('todoList'));

    addToList({
        id: savedTodoList.length,
        ...todo
    });
    
    const newTodo = {
        id: savedTodoList.length,
        ...todo
    }

    savedTodoList.push(newTodo);
    storage.setItem('todoList', JSON.stringify(savedTodoList));
}

function updateTodo(todo){
    const savedTodoList = JSON.parse(storage.getItem('todoList'));
    const newSavedTodoList = savedTodoList.map((item) => {
        if(item.id == todo.id){
            item.done = todo.done;
        }
        return item;
    })

    storage.setItem('todoList', JSON.stringify(newSavedTodoList));
}

function addToList(todo) {
    if (todo.title != "") {
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
        input.value = todo.id;
        if (todo.done) {
            label.classList.add("todo-done");
            input.checked = true;
        }

        const textItem = document.createTextNode(todo.title); //Texto criado

        label.appendChild(textItem);
        div.appendChild(input);
        div.appendChild(label);

        const listItem = document.createElement("li"); // <li></li>
        listItem.appendChild(div);
        listItem.classList.add("list-group-item");

        const todoList = getItem("#todo-list");
        todoList.appendChild(listItem); //<ul>.....<li>mais uma tarefa</li></ul>
    }
}

const inputTodo = getItem("#input-todo");

inputTodo.addEventListener("keydown", (evento) => {
    if (evento.code == 'Enter') {
        saveTodo({
            title: inputTodo.value,
            done: false
        });
        inputTodo.value = "";
    }
});

const btnAddTodo = getItem("#btn-add-todo");
btnAddTodo.addEventListener("click", (evento) => {
    const inputValue = inputTodo.value;
    saveTodo({
        title: inputValue,
        done: false
    });
    inputTodo.value = "";
});

function checkTodo(checkbox) {
    const label = checkbox.nextElementSibling;

    if (checkbox.checked == true) {
        label.classList.add("todo-done");
    } else {
        label.classList.remove("todo-done");
    }

    updateTodo({
        id: checkbox.value,
        done: checkbox.checked
    });
}

let savedTodoList = storage.getItem('todoList');

if(!Array.isArray(JSON.parse(savedTodoList))){
    storage.setItem('todoList',JSON.stringify([]));
    savedTodoList = '[]';
}

const todoListJson = JSON.parse(savedTodoList);
todoListJson.map((todo) => {
    addToList(todo);
});