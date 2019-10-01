const usersList = document.getElementById("usersList");

async function getUsers() {
  await fetch("https://jsonplaceholder.typicode.com/users/")
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      displayList(response);
    });
}

function displayList(response) {
  let list = "";
  response.forEach(function(user) {
    list = list + `<li>${user.name} - ${user.email} </li>`;
  });
  usersList.innerHTML = list;
}
