/* Create navigation lists dynamically
    - First declare navigation items array.
    - Select the first ul attribute (("ul")[0]) and set to navUl variable. 
      (Since ul doesn't have a class attribute yet, getElementsByTagName is used.)
    - Set "nav-lists" as class attribute.
    - Create an icon element for close menu in mobile screen, set a class attribute and append to ul.
    - Use forEach to create "li" and add navigation items with anchor tags by using innerHTML.
    - Add "li" to "ul" by using appendChild();
*/

let navItems = ["Home", "Trending", "Posts", "About"]; 
const navUl = document.getElementsByTagName("ul")[0]; 
navUl.setAttribute("class", "nav-lists");

const i = document.createElement("i");
i.setAttribute("class", "fi fi-br-cross");
navUl.append(i);

navItems.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<a class="nav ${item.toLowerCase()}" href="#${item.toLowerCase()}">${item}</a>`;
    navUl.appendChild(li);
})

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

/* Check if the sections is clearly viewed in the viewport. "Active state" shown in that section once being viewed. 
    - Select all section and nav class in ul then declare them to variables respectively.
    - To check if the section is in the viewport, use scroll for addEventListener().
    - Set isInViewport variable as we want to store id of the section.
    - Use forEach to run each section, check top and height.
    - Use scrollY() to see if it's greater than the top of the section minus the amount of section height.
      (I reduce the height by 30% for the better view.)
    - Get the id of section that being view and store it in "isInViewport" variable.
    - Use classList to add "active" class to the section. However, we need to remove "active" class if it's current active.
*/

const sections = document.querySelectorAll("section");
const navs = document.querySelectorAll(".nav");

window.addEventListener("scroll", () => {
    let isInViewport = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - (sectionHeight * 0.3))) {
            isInViewport = section.getAttribute("id");
        }
    });

    navs.forEach(a => {
        a.classList.remove("active");
        if (a.classList.contains(isInViewport)) {
            a.classList.add("active");
        }
    });
});


/* Scroll to Anchor 
    - Select all href elements in nav-lists class. 
    - Add click event to each anchor tag in nav menu.
    - Apply preventDefault() in order to prevent behavior of anchor tag as we need to implement scrollIntoView instead.
    - Declare the values of href in nav menu (return href="#...").
    - Select the section that match the href's value (return <section id="...></section>"). Declare to sectionTarget variable.
    - Implement scrollIntoView() method to sectionTarget in order to smoothly scroll to the selected section once click on the matched nav menu item.
*/

const navAnchorLi = document.querySelectorAll("ul li a[href^='#']");

navAnchorLi.forEach(aEl => {
    aEl.addEventListener("click", (e) => {

        e.preventDefault();

        const hash = aEl.getAttribute("href");
        const sectionTarget = document.querySelector(hash);

        sectionTarget.scrollIntoView({
            behavior: "smooth",
        });
    });
});
