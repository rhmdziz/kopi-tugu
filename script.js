const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 1) {
        navbar.classList.add("light");
    } else {
        navbar.classList.remove("light");
    }
});


const parallaxBackground = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  parallaxBackground.style.backgroundPositionY = -scrollPosition * 0.75 + 'px';
});