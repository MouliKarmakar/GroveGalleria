let menu = document.getElementById("menubutton");
let sidebar = document.querySelector(".sidebar");
menu.addEventListener("click", function () {
  sidebar.classList.toggle("sidebartoggle");
});


let search = document.getElementById("S-icon");
let searchbar = document.querySelector("#search-area");

search.addEventListener("click", function () {
  searchbar.classList.toggle("showSearchbar");
});
