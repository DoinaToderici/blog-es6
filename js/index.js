const loading = document.getElementById("loading");
const usersList = document.getElementById("usersList");

async function getUsers() {
  isLoading(true);

  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const json = await response.json();
  isLoading(false);
  displayList(json);
}

function displayList(response) {
  let list = "";
  response.forEach(function(user) {
    list += `<li>
      <a href="user.html?id=${user.id}">
        <p>${user.name}</p></a>
        <div class="contact"> ${user.email}<br> ${user.phone}<br> ${user.website}<div>  
    </li>`;
  });
  usersList.innerHTML = list;
}

function isLoading(x) {
  loading.style.display = x ? "flex" : "none";
}

getUsers();
