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


const slider = document.getElementById('slider');
let scrollInterval;

function startAutoScroll() {
scrollInterval = setInterval(() => {
    slider.scrollLeft += slider.offsetWidth;

    console.log('x:',slider.scrollLeft,'y:', slider.scrollWidth - slider.offsetWidth)

    if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
        slider.scrollLeft = 0;
    }
}, 3000); // Adjust the interval as needed (3000ms = 3 seconds)
}

function stopAutoScroll() {
    clearInterval(scrollInterval);
}

slider.addEventListener('mouseenter', stopAutoScroll);
slider.addEventListener('mouseleave', startAutoScroll);

startAutoScroll();
