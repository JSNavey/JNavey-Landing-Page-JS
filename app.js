
// Testing if the js script is linked.

const hamburger = document.querySelector(".fi-br-menu-burger");
const cross = document.querySelector(".fi-br-cross");
const navLists = document.querySelector(".nav-lists");

hamburger.onclick = function() {
    navLists.classList.toggle("active");
};

cross.onclick = function() {
    navLists.classList.remove("active");
};



