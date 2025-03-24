let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
        dots[i].classList.toggle("active", i === index);
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        slideIndex = i;
        showSlide(i);
    });
});

setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
showSlide(slideIndex);
