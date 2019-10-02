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
    list =
      list +
      `<li><p>${user.name}</p><div class="contact"> ${user.email}<br> ${user.phone}<br> ${user.website}<div> </li>`;
  });
  usersList.innerHTML = list;
}

//1. scrii toate functiile din parametri in es6
//2. punel pe git fara comentarii
