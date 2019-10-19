const loading = document.getElementById("loading");

const user = document.getElementById("user");
const url = new URL(window.location.href);
const id = url.searchParams.get("id");

async function getUserData() {
  isLoading(true);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const json = await response.json();

  isLoading(false);

  displayUser(json);
}

function displayUser(json) {
  const userDetails = `<h2>${json.name}</h2>`;
  user.innerHTML = userDetails;
}

function isLoading(x) {
  loading.style.display = x ? "flex" : "none";
}

getUserData();
