
const carouselInner = document.querySelector(".carousel_inner");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function updateCarousel() {
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener("click", function () {
    index = (index + 1) % images.length;
    updateCarousel();
});

prevBtn.addEventListener("click", function () {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});
