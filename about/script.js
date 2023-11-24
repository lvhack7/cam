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

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

        // Create a master timeline
        var masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".bg-cap",
                start: "top center", // Adjust as needed
                end: "bottom center",
                scrub: 1,
                //pin: true, // Pin the section during the animation
            }
        });

        // Add animations to the master timeline
        var elementsToAnimate = document.querySelectorAll(".anim > div");
        elementsToAnimate.forEach(function (element, index) {
            masterTimeline.from(element, {
                opacity: 0,
                y: "100",
                duration: 4,
                ease: "power2.inOut"
            });

            if (index < elementsToAnimate.length - 1) {
                // Add animations for elements to disappear
                masterTimeline.to(element, {
                    opacity: 0,
                    y: "-100",
                    duration: 5,
                    ease: "power2.inOut"
                });
            }
        });
});