function isMobile() {
    // Set the breakpoint at which you consider the device to be mobile
    const mobileWidth = 768; // Adjust this value based on your design needs
  
    // Check if the viewport width is less than the mobileWidth
    return window.innerWidth < mobileWidth;
}

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel-license");
    const inner = carousel.querySelector(".carousel-inner");
    const slides = inner.querySelectorAll(".carousel-slide-license");

    let currentIndex = 0;

    window.addEventListener("resize", function(event) {
        updateCarouselLicense()
    })

    function updateCarouselLicense() {
        if (isMobile()) {
            slides.forEach((slide, index) => {
                const offset = index - currentIndex;
                slide.style.opacity = Math.abs(offset) < 1 ? 1 : 0; // Show only the three adjacent slides
            });

            inner.style.transform = `translateX(-${currentIndex * (100)}%)`;
        } else {
            slides.forEach((slide, index) => {
                const offset = index - currentIndex - 1;
                slide.style.opacity = Math.abs(offset) <= 1 ? 1 : 0; // Show only the three adjacent slides
            });

            inner.style.transform = `translateX(-${currentIndex * (100/3)}%)`;
        }
    }

    function nextSlideLicense() {
        if (isMobile()) {
            currentIndex = (currentIndex + 1) % (slides.length); // Subtract 2 for the number of visible slides
            updateCarouselLicense();
        } else {
            currentIndex = (currentIndex + 1) % (slides.length - 2); // Subtract 2 for the number of visible slides
            updateCarouselLicense();    
        }
    }

    function prevSlideLicense() {
        if (isMobile()) {
            currentIndex = (currentIndex - 1 + (slides.length)) % (slides.length);
            updateCarouselLicense();
        } else {
            currentIndex = (currentIndex - 1 + (slides.length - 2)) % (slides.length - 2);
            updateCarouselLicense();
        }
        
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

    window.addEventListener("resize", function(event) {
        updateCarouselLicense()
    })

    function updateCarouselLicense() {
        if (isMobile()) {
            slides.forEach((slide, index) => {
                const offset = index - currentIndex;
                slide.style.opacity = Math.abs(offset) < 1 ? 1 : 0; // Show only the three adjacent slides
            });

            inner.style.transform = `translateX(-${currentIndex * (100)}%)`;
        } else {
            slides.forEach((slide, index) => {
                const offset = index - currentIndex - 1;
                slide.style.opacity = Math.abs(offset) <= 1 ? 1 : 0; // Show only the three adjacent slides
            });

            inner.style.transform = `translateX(-${currentIndex * (100/3)}%)`;
        }
    }

    function nextSlideLicense() {
        if (isMobile()) {
            currentIndex = (currentIndex + 1) % (slides.length); // Subtract 2 for the number of visible slides
            updateCarouselLicense();
        } else {
            currentIndex = (currentIndex + 1) % (slides.length - 2); // Subtract 2 for the number of visible slides
            updateCarouselLicense();    
        }
    }

    function prevSlideLicense() {
        if (isMobile()) {
            currentIndex = (currentIndex - 1 + (slides.length)) % (slides.length);
            updateCarouselLicense();
        } else {
            currentIndex = (currentIndex - 1 + (slides.length - 2)) % (slides.length - 2);
            updateCarouselLicense();
        }
        
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

    window.addEventListener("resize", function(event) {
        updateCarouselLicense()
    })

    function updateCarouselLicense() {
        if (isMobile()) {
            slides.forEach((slide, index) => {
                const offset = index - currentIndex;
                slide.style.opacity = Math.abs(offset) < 1 ? 1 : 0; // Show only the three adjacent slides
            });

            inner.style.transform = `translateX(-${currentIndex * (100)}%)`;
        } else {
            slides.forEach((slide, index) => {
                const offset = index - currentIndex - 1;
                slide.style.opacity = Math.abs(offset) <= 1 ? 1 : 0; // Show only the three adjacent slides
            });

            inner.style.transform = `translateX(-${currentIndex * (100/3)}%)`;
        }
    }

    function nextSlideLicense() {
        if (isMobile()) {
            currentIndex = (currentIndex + 1) % (slides.length); // Subtract 2 for the number of visible slides
            updateCarouselLicense();
        } else {
            currentIndex = (currentIndex + 1) % (slides.length - 2); // Subtract 2 for the number of visible slides
            updateCarouselLicense();    
        }
    }

    function prevSlideLicense() {
        if (isMobile()) {
            currentIndex = (currentIndex - 1 + (slides.length)) % (slides.length);
            updateCarouselLicense();
        } else {
            currentIndex = (currentIndex - 1 + (slides.length - 2)) % (slides.length - 2);
            updateCarouselLicense();
        }
        
    }

    document.getElementById("prev-btn-letter").addEventListener("click", prevSlideLicense);
    document.getElementById("next-btn-letter").addEventListener("click", nextSlideLicense);

    // Initialize the carousel
    updateCarouselLicense();
});

document.addEventListener("DOMContentLoaded", function() {
    const mobileLinks = document.querySelectorAll(".mobile-link")

    mobileLinks.forEach((link, index) => {
        link.addEventListener("click", function(event) {
            event.preventDefault()
            
            let href = link.dataset.href
            //console.log(href)
            window.location.href = href
        })
    })
})

function toggleMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    var body = document.body

    if(mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden")
        body.classList.add("overflow-hidden")
    } else {
        mobileMenu.classList.add("hidden")
        body.classList.remove("overflow-hidden")
    }
}

function contact() {
    var contact = document.getElementById("contact-panel")

    if (contact.classList.contains("hidden")) {
        contact.classList.remove("hidden")
    } else {
        contact.classList.add("hidden")
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const imgs = document.querySelectorAll("img")

    imgs.forEach((img, index) => {
        img.loading = "lazy"
    })
})

