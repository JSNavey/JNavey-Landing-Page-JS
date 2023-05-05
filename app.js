// Open and close nav bar in mobile size screen

const hamburger = document.querySelector(".fi-br-menu-burger");
const cross = document.querySelector(".fi-br-cross");
const navLists = document.querySelector(".nav-lists");

/*
hamburger.onclick = function() {
    navLists.classList.toggle("active");
};

cross.onclick = function() {
    navLists.classList.remove("active");
};
*/

hamburger.addEventListener("click", () => {
    navLists.classList.toggle("active");
});

cross.addEventListener("click", () => {
    navLists.classList.remove("active");
});


