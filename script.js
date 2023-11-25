const isMobile = () => {

    // User agent string method
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Screen resolution method
    if (!isMobile) {
        let screenWidth = window.screen.width;
        let screenHeight = window.screen.height;
        isMobile = (screenWidth < 768 || screenHeight < 768);
    }
    
    // Touch events method
    if (!isMobile) {
        isMobile = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }
    
    // CSS media queries method
    if (!isMobile) {
        let bodyElement = document.getElementsByTagName('body')[0];
        isMobile = window.getComputedStyle(bodyElement).getPropertyValue('content').indexOf('mobile') !== -1;
    }
    
    return isMobile
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
        if (isMobile() || window.innerWidth < 768) {
            slides.forEach((slide, index) => {
                const offset = index - currentIndex;
                slide.style.opacity = Math.abs(offset) < 1 ? 1 : 0; // Show only the three adjacent slides
            });

            inner.style.transform = `translateX(-${currentIndex * (100)}%)`;
        } else {
            slides.forEach((slide, index) => {
                const offset = index - currentIndex - 2;
                slide.style.opacity = Math.abs(offset) < 3 ? 1 : 0; // Show only the three adjacent slides
            });

            inner.style.transform = `translateX(-${currentIndex * (100/4)}%)`;
        }
    }

    function nextSlideLicense() {
        if (isMobile() || window.innerWidth < 768) {
            currentIndex = (currentIndex + 1) % (slides.length); // Subtract 2 for the number of visible slides
            updateCarouselLicense();
        } else {
            currentIndex = (currentIndex + 1) % (slides.length - 3); // Subtract 2 for the number of visible slides
            updateCarouselLicense();    
        }
    }

    function prevSlideLicense() {
        if (isMobile() || window.innerWidth < 768) {
            currentIndex = (currentIndex - 1 + (slides.length)) % (slides.length);
            updateCarouselLicense();
        } else {
            currentIndex = (currentIndex - 1 + (slides.length - 3)) % (slides.length - 3);
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
    const slides = inner.querySelectorAll(".carousel-slide-object");

    let currentIndex = 0;

    window.addEventListener("resize", function(event) {
        updateCarouselLicense()
    })

    function updateCarouselLicense() {
        if (isMobile() || window.innerWidth < 768) {
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
        if (isMobile() || window.innerWidth < 768) {
            currentIndex = (currentIndex + 1) % (slides.length); // Subtract 2 for the number of visible slides
            updateCarouselLicense();
        } else {
            currentIndex = (currentIndex + 1) % (slides.length - 2); // Subtract 2 for the number of visible slides
            updateCarouselLicense();    
        }
    }

    function prevSlideLicense() {
        if (isMobile() || window.innerWidth < 768) {
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
        if (isMobile() || window.innerWidth < 768) {
            slides.forEach((slide, index) => {
                const offset = index - currentIndex;
                slide.style.opacity = Math.abs(offset) < 1 ? 1 : 0; // Show only the three adjacent slides
            });

            inner.style.transform = `translateX(-${currentIndex * (100)}%)`;
        } else {
            slides.forEach((slide, index) => {
                const offset = index - currentIndex - 2;
                slide.style.opacity = Math.abs(offset) < 3 ? 1 : 0; // Show only the three adjacent slides
            });

            inner.style.transform = `translateX(-${currentIndex * (100/4)}%)`;
        }
    }

    function nextSlideLicense() {
        if (isMobile() || window.innerWidth < 768) {
            currentIndex = (currentIndex + 1) % (slides.length); // Subtract 2 for the number of visible slides
            updateCarouselLicense();
        } else {
            currentIndex = (currentIndex + 1) % (slides.length - 3); // Subtract 2 for the number of visible slides
            updateCarouselLicense();    
        }
    }

    function prevSlideLicense() {
        if (isMobile() || window.innerWidth < 768) {
            currentIndex = (currentIndex - 1 + (slides.length)) % (slides.length);
            updateCarouselLicense();
        } else {
            currentIndex = (currentIndex - 1 + (slides.length - 3)) % (slides.length - 3);
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
    var btn = document.getElementById("chat-btn")
    var icon = btn.querySelector("img")


    if (contact.style.display === 'none') {
        contact.style.display = 'flex'
        btn.classList.remove("animation-pulse")
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            icon.src = "./imgs/close-icon.svg"
        } else {
            icon.src = "../imgs/close-icon.svg"
        }
    } else {
        contact.style.display = 'none'
        btn.classList.add("animation-pulse")
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            icon.src = "./imgs/chat-icon.svg"
        } else {
            icon.src = "../imgs/chat-icon.svg"
        }
    }
}

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-catalog")

    if (dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden")
    } else {
        dropdown.classList.add("hidden")
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('openModalButton');
    const videoModal = document.getElementById('videoModal');
    const closeModalButton = document.getElementById('closeModalButton');
  
    openModalButton.addEventListener('click', function () {
      videoModal.classList.remove('hidden');
    });
  
    closeModalButton.addEventListener('click', function () {
      videoModal.classList.add('hidden');
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    const imgs = document.querySelectorAll("img")

    imgs.forEach((img, index) => {
        img.loading = "lazy"
    })
})

