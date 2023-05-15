# Landing Page Project  
![HTML](https://img.shields.io/badge/HTML-HTML5-orange)
![CSS](https://img.shields.io/badge/CSS-CSS3-blue)
![Javascript lastest version](https://img.shields.io/badge/Javascript-ECMAScript%202022-f0db4f)
![Contribute](https://img.shields.io/badge/Contribute-Welcome-ff69b4)

This project is part of Front End Development - Bertelsmann Next Generation Tech Booster Scholarship from Udacity. It is the second project that is an extension work from the first one - [JNavey Personal Blog]( https://jsnavey.github.io/JNavey-Personal-Blog/) which focuses only on HTML and CSS. For this project, I implement the knowledge of DOM manipulation to add, remove and check elements in DOM.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [How to Contribute](#how-to-contribute)
- [Resource Credits](#resource-credits)
- [License](#license)

# Installation
Installation is not required.

# Usage
As mentioned above, this project is based on the first project's struture. However, I modified some contents in order to fullfill the rubric requirement.

#### 1. Built 4 content sections in HTML file.
There are Home, Trending, Posts and About sections. Home section has an empty navigation menu (empty ul).

#### 2. Create the navigation menu dynamically and add into an empty ul.
Use `setAttibute()`, `createElement()`, `innerHTML`, `append()`, and `appendChild()`.

#### 3. Add functionality to check if the specific section is being viewed in viewport. If the section is visible, add "Active State".
1. Add `scroll` event to `addEventListener()`.
2. Use `forEach` to run each section and check top and height of it. 
3. If visible, get "id" of that section by using `getAttribute("id")`.
4. Use `classList` to add "active" class to the section that associated to that id.

#### 4. Add functionality to scroll smoothly to appropriate section once click on a navigation item.
Use `click` event to `addEventListener()` and `scrollIntoView()`. Apply `preventDefault()` in order to stop `href` default behavior.

#### 5. Add functionality to open and close the navigation menu in mobile screen size in order open and close menu tab
Use `classList.add("active)` and `classList.remove("active")`. 

# Development
This project is built from HTML, CSS and Javascript languages.<br>

[![My Skills](https://skills.thijs.gg/icons?i=js,html,css)](https://skills.thijs.gg)

# How to Contribute
There is plenty of room for improvement. You are very welcome to clone the repo.  
1. Clone the repo and create a new branch.<br>
`$ git checkout https://github.com/JSNavey/JNavey-Landing-Page-JS.git -b new_branch_name`
2. Make changes or add new features and test.
3. Submit Pull Request with comprehensive explanation.

# Resource Credits
Images from [Unsplash](https://unsplash.com/).<br>
Icons from [Flaticon](https://www.flaticon.com/).

# License
No license.
