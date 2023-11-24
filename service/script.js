const viewportElement = document.getElementById('timeline');

// Listen for scroll events on the viewportElement
// window.addEventListener('scroll', function () {
//     // Calculate the percentage of visibility
//     const elementTop = viewportElement.getBoundingClientRect().top;
//     const elementHeight = viewportElement.clientHeight;
//     const windowHeight = window.innerHeight;
    
//     // Calculate the percentage of visibility
//     const percentageVisible = Math.max(0, Math.min((windowHeight - elementTop) / elementHeight, 1)) * 100;

//     if (percentageVisible === 100) {
//         document.documentElement.style.overflow = 'hidden'
//     }

//     // You can now use the 'percentageVisible' value for further actions
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Initialize GSAP
//     gsap.registerPlugin(ScrollTrigger);

//     // Create a timeline for the timeline section
//     var timelineSectionTimeline = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".timeline-section",
//             start: "top center",
//             end: "bottom center",
//             scrub: 1,
//         }
//     });

//     // Add animations to the timeline section
//     var timelineElements = document.querySelectorAll(".timeline-section .step-block");
//     timelineElements.forEach(function (element, index) {
//         timelineSectionTimeline.from(element, {
//             opacity: 0.5,
//             y: "20",
//             duration: 0.5,
//             ease: "power2.inOut"
//         });

//         if (index < timelineElements.length - 1) {
//             // Add animations for elements to disappear
//             timelineSectionTimeline.to(element, {
//                 opacity: 0.5,
//                 duration: 1,
//                 ease: "power2.inOut"
//             });
//         }
//     });

//     // Create a ScrollTrigger for the timeline section
//     ScrollTrigger.create({
//         trigger: ".timeline-section",
//         start: "top center",
//         end: "bottom center",
//         scrub: 1,
//     });
// });

