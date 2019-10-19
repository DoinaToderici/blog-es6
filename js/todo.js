const listTodo = document.getElementById("listtodo");

getToDos();
async function getToDos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await response.json();
  displayListTodo(json);
}

function displayListTodo(response) {
  let list = "";
  response.forEach(function(todo) {
    const checked = todo.completed ? "checked" : "";
    list += `<li>
        <input type="checkbox" ${checked}/>
        <p>${todo.title}</p>
        </li>`;
  });
  listTodo.innerHTML = list;
}
