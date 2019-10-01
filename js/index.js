async function getUsers() {
  console.log("STEP 1");

  await fetch("https://jsonplaceholder.typicode.com/users/")
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log("STEP 2", response);
    });
  console.log("STEP 3");
}

getUsers();
