// document.addEventListener("DOMContentLoaded", function () {
//     const inner = document.getElementById("steps")
//     const stepBlocks = document.querySelectorAll(".step-block");
    
//     let prevScrollY = window.scrollY;
//     let currentIndex = 0;

//     updateSteps();

//     function updateSteps() {
//         stepBlocks.forEach((slide, index) => {
//             const offset = index - currentIndex - 2;
//             slide.style.display = Math.abs(offset) <= 3 ? 'block' : 'none' ; // Show only the three adjacent slides
//         });

//         inner.style.transform = `translateY(-${currentIndex * (100 / 5)}%)`;
//     }

//     function nextStep() {
//         currentIndex = (currentIndex + 1) % (stepBlocks.length - 4); // Subtract 2 for the number of visible slides
//         updateSteps();
//     }

//     function prevStep() {
//         currentIndex = (currentIndex - 1 + (stepBlocks.length - 4)) % (stepBlocks.length - 4);
//         updateSteps();
//     }

//     window.addEventListener("scroll", function () {
//         const currentScrollY = window.scrollY;
//         const scrollDelta = currentScrollY - prevScrollY;

//         if (Math.abs(scrollDelta) > 100) {
//             // Scrolling down
//             if (scrollDelta > 0) {
//                 console.log("Scroll up")
//                 nextStep()
//             } else {
//                 console.log("Scroll down")
//                 prevStep()
//             }
//         }
//     });

//     updateSteps()
// });