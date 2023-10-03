let url = "https://api.github.com/users/shaxobwebdev";

const search = document.getElementById("rearch");

search.addEventListener("keyup", (e) => {
  let url = `https://api.github.com/users/${e.target.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
