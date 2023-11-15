document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel-license");
    const inner = carousel.querySelector(".carousel-inner");
    const slides = inner.querySelectorAll(".carousel-slide-license");

    let currentIndex = 0;

    function updateCarouselLicense() {
        slides.forEach((slide, index) => {
            const offset = index - currentIndex - 1;
            slide.style.opacity = Math.abs(offset) <= 1 ? 1 : 0; // Show only the three adjacent slides
        });

        inner.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
    }

    function nextSlideLicense() {
        currentIndex = (currentIndex + 1) % (slides.length - 2); // Subtract 2 for the number of visible slides
        updateCarouselLicense();
    }

    function prevSlideLicense() {
        currentIndex = (currentIndex - 1 + (slides.length - 2)) % (slides.length - 2);
        updateCarouselLicense();
    }

    document.getElementById("prev-btn-license").addEventListener("click", prevSlideLicense);
    document.getElementById("next-btn-license").addEventListener("click", nextSlideLicense);

    // Initialize the carousel
    updateCarouselLicense();
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("carousel-objects");
    const inner = carousel.querySelector(".carousel-inner");
    const slides = inner.querySelectorAll(".carousel-slide-license");

    let currentIndex = 0;

    function updateCarouselLicense() {
        slides.forEach((slide, index) => {
            const offset = index - currentIndex - 1;
            slide.style.opacity = Math.abs(offset) <= 1 ? 1 : 0; // Show only the three adjacent slides
        });

        inner.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
    }

    function nextSlideLicense() {
        currentIndex = (currentIndex + 1) % (slides.length - 2); // Subtract 2 for the number of visible slides
        updateCarouselLicense();
    }

    function prevSlideLicense() {
        currentIndex = (currentIndex - 1 + (slides.length - 2)) % (slides.length - 2);
        updateCarouselLicense();
    }

    document.getElementById("prev-btn-obj").addEventListener("click", prevSlideLicense);
    document.getElementById("next-btn-obj").addEventListener("click", nextSlideLicense);

    // Initialize the carousel
    updateCarouselLicense();
})

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel-partners");
    const inner = carousel.querySelector(".carousel-inner");
    const slides = inner.querySelectorAll(".carousel-slide-partner");

    let currentIndex = 0;

    function updateCarouselLicense() {
        slides.forEach((slide, index) => {
            const offset = index - currentIndex - 2;
            slide.style.opacity = Math.abs(offset) < 3 ? 1 : 0; // Show only the three adjacent slides
        });

        inner.style.transform = `translateX(-${currentIndex * (100 / 5)}%)`;
    }

    function nextSlideLicense() {
        currentIndex = (currentIndex + 1) % (slides.length - 4); // Subtract 2 for the number of visible slides
        updateCarouselLicense();
    }

    function prevSlideLicense() {
        currentIndex = (currentIndex - 1 + (slides.length - 4)) % (slides.length - 4);
        updateCarouselLicense();
    }

    document.getElementById("prev-btn-partner").addEventListener("click", prevSlideLicense);
    document.getElementById("next-btn-partner").addEventListener("click", nextSlideLicense);

    // Initialize the carousel
    updateCarouselLicense();
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel-letters");
    const inner = carousel.querySelector(".carousel-inner");
    const slides = inner.querySelectorAll(".carousel-slide-license");

    let currentIndex = 0;

    function updateCarouselLicense() {
        slides.forEach((slide, index) => {
            const offset = index - currentIndex - 1;
            slide.style.opacity = Math.abs(offset) <= 1 ? 1 : 0; // Show only the three adjacent slides
        });

        inner.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
    }

    function nextSlideLicense() {
        currentIndex = (currentIndex + 1) % (slides.length - 2); // Subtract 2 for the number of visible slides
        updateCarouselLicense();
    }

    function prevSlideLicense() {
        currentIndex = (currentIndex - 1 + (slides.length - 2)) % (slides.length - 2);
        updateCarouselLicense();
    }

    document.getElementById("prev-btn-letter").addEventListener("click", prevSlideLicense);
    document.getElementById("next-btn-letter").addEventListener("click", nextSlideLicense);

    // Initialize the carousel
    updateCarouselLicense();
});

