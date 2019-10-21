const postsList = document.getElementById("posts");

async function getPosts() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await result.json();
  displayPosts(json);
}

function displayPosts(data) {
  let list = "";
  data.forEach(function(post) {
    list += `<li>
        <a href="posts.html?id=${post.id}">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </a>
        </li>`;
  });

  postsList.innerHTML = list;
}

getPosts();
