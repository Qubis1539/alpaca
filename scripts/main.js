$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1.2
            },
            550: {
                items: 1.5
            },
            670: {
                items: 2
            },
            850: {
                items: 2.5
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3.5
            },
            1300: {
                items: 4
            },
            1500: {
                items: 4.5
            },
            1820: {
                items: 5.5
            }
        }
    });
});



// Template.featuredCarousel.rendered = function() {
//     $('.owl-carousel').owlCarousel({
//      loop:true
//     });
//   }