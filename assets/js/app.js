const btnAddTodo = document.querySelector("#btn-add-todo");
btnAddTodo.addEventListener("click", (evento) => {
    const inputTodo = document.querySelector("#input-todo");
    const inputValue = inputTodo.value;

    console.log(inputValue);
});
