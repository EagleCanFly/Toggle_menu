let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebarTitle.style.opacity = "1";
        getSidebar.style.width = "272px";

        for (let i = 0; i < getSidebarLinks.length; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden";
        getSidebarTitle.style.opacity = "0";
        getSidebar.style.width = "50px";

        for (let i = 0; i < getSidebarLinks.length; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        toggleNavStatus = false;
    }
}