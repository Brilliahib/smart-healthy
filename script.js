window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".myNavbar");
    if (window.scrollY > 0) {
        navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }
});