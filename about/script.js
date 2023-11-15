document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about-section")
    const slides = aboutSection.querySelectorAll('.about')

    let currentId = 0

    function updateAbout() {
        slides.forEach((slide, index) => {
            if (index !== currentId) {
                slide.style.display = 'none';
            } else {
                slide.style.display = 'grid'
            }
        })
    }

    document.getElementById("prev-btn").addEventListener("click", function() {
        if (currentId >= 1) {
            currentId = currentId - 1
            updateAbout()
        }
    })

    document.getElementById("next-btn").addEventListener("click", function() {
        if (currentId < 2) {
            currentId = currentId + 1
            updateAbout()
        }
    })

    updateAbout()
})