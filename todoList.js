let addMessage = document.querySelector(".nameTodo"),
    addButton = document.querySelector(".addTodo"),
    todo = document.querySelector(".sizeTodoList"),
    form = document.querySelector("#form");

let todoList = [];

if (localStorage.getItem("todo")) {
    todoList = JSON.parse(localStorage.getItem("todo"));
    displayMassages();
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false,
    };

    todoList.push(newTodo);

    displayMassages();
    localStorage.setItem("todo", JSON.stringify(todoList));
});

function displayMassages() {
    let displayMassage = "";
    todoList.forEach(function(item, i) {
        displayMassage += `
        <li>
            <input type="checkbox" class="check_t_f" id="item_${i}" ${
      item.checked ? "checked" : ""
    }>
            <label for="item_${i}">${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMassage;
    });
}

todo.addEventListener("change", function(event) {
    let valueLable = todo.querySelector(
        "[for=" + event.target.getAttribute("id") + "]"
    ).innerHTML;

    todoList.forEach(function(item) {
        if (item.todo === valueLable) {
            item.checked = !item.checked;
            localStorage.setItem("todo", JSON.stringify(todoList));
        }
    });
});