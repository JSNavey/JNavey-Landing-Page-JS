/*
Create navigation lists dynamically
    - First declare navigation items array.
    - Select the first ul attribute (("ul")[0]) and set to navUl variable. 
      (Since ul doesn't have a class attribute yet, getElementsByTagName is used.)
    - Set "nav-lists" as class attribute.
    - Create an icon element for close menu in mobile screen, set a class attribute and append to ul.
    - Use forLoop to create "li" and add navigation items with anchor tags by using innerHTML.
    - Add "li" to "ul" by using appendChild();
*/

let navItems = ["Home", "Trending", "Lastest Posts", "About Me"]; 
const navUl = document.getElementsByTagName("ul")[0]; 
//console.log(ul);
navUl.setAttribute("class", "nav-lists");

const i = document.createElement("i");
i.setAttribute("class", "fi fi-br-cross");
navUl.append(i);

for (let item of navItems) {
    //console.log(item);
    const li = document.createElement("li");
    //li.innerHTML = item;
    li.innerHTML += `<a class="nav" href="#">${item}</a>`;
    navUl.appendChild(li);
}

/* Open and close nav bar in mobile size screen by using add and remove active class method.
    - Declare variables by using querySelector to select classes of target elements.
    - Use "addEventListener()" to listen a click on a hamburger menu to add "active" state to ul in order to open the menu bar for mobile screen.
     - Use "addEventListener()" to listen a click on a cross menu to remove "active" state to ul in order to close the menu bar.
     - *Note* styling for active states are in "global.css"
*/
const hamburger = document.querySelector(".fi-br-menu-burger");
const cross = document.querySelector(".fi-br-cross");
const navLists = document.querySelector(".nav-lists");

hamburger.addEventListener("click", () => {
    navLists.classList.add("active");
});

cross.addEventListener("click", () => {
    navLists.classList.remove("active");
});





