
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

