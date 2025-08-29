$(document).ready(function() {
 
    $("#owl-banner").owlCarousel({
        loop:true,
        margin:10,
        lazyLoad: true,
        autoplay: true, 
        autoplayTimeout:2000,
        nav:true,
        dots: true,
        autoplayHoverPause:true,
        items: 1
    });
   
});

$(document).ready(function() {
 
    $("#owl-coming-events").owlCarousel({
        loop:true,
        margin:10,
        lazyLoad: true,
        autoplay: true, 
        autoplayTimeout:2000,
        nav:true,
        dots: false,
        autoplayHoverPause:true,
        responsive: {
            0: { items: 1,  nav:true, },
            768:{
                items: 2,
                 nav:true,
            },
            992: {
                items: 3,
                 nav:true,
            }
        }
    });
   
});

$(document).ready(function() {
 
    $("#owl-brics").owlCarousel({
        loop:true,
        margin:10,
        lazyLoad: true,
        autoplay: true, 
        autoplayTimeout:2000,
        nav:true,
        autoplayHoverPause:true,
        responsive: {
            0: { 
                items: 1 
            },
            475:{
                items: 2,
            },
            768: {
                items: 1
            },
            850: {
                items: 2
            },
            1200: {
                items: 3,
            }
        }
    });
   
});

$(document).ready(function() {
 
    $("#owl-intiative").owlCarousel({
        loop:true,
        margin:10,
        lazyLoad: true,
        autoplay: true, 
        autoplayTimeout:2000,
        nav:true,
        autoplayHoverPause:true,
        items: 1
    });
   
});

$(document).ready(function() {
 
    $("#new-member-owl").owlCarousel({
        loop:true,
        margin:10,
        lazyLoad: true,
        autoplay: true, 
        autoplayTimeout:2000,
        slideSpeed: 500,
        nav:true,
        dots: false,
        autoplayHoverPause:true,
        responsive: {
            0: { items: 1 },
            475: {
                items: 2
            },
            768:{
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
   
});

$(document).ready(function() {
 
    $("#owl-feedback").owlCarousel({
        loop:true,
        margin:10,
        lazyLoad: true,
        autoplay: true, 
        autoplayTimeout:2000,
        slideSpeed: 500,
        nav:true,
        dots: false,
        autoplayHoverPause:true,
        items: 1
    });
   
});

