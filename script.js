const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 680) {
        navbar.classList.add("light");
    } else {
        navbar.classList.remove("light");
    }
});


window.addEventListener("scroll", () => {
    const scrollYValue = window.scrollY;
    console.log("ScrollY Value:", scrollYValue, "px");
});
