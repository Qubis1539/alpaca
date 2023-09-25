$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            550: {
                items: 1
            },
            670: {
                items: 2
            },
            850: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            },
            1300: {
                items: 4
            },
            1500: {
                items: 4
            },
            1820: {
                items: 5
            }
        }
    });
});



// Template.featuredCarousel.rendered = function() {
//     $('.owl-carousel').owlCarousel({
//      loop:true
//     });
//   }