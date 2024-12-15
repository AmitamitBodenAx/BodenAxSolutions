// Use DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Slick Slider with custom navigation arrows
    $('.slick-slider').slick({
        infinite: true,  // Infinite scrolling
        slidesToShow: 2, // Show 3 cards at a time
        slidesToScroll: 2, // Scroll 2 card at a time
        autoplay: true,  // Enable autoplay
        arrows: false,
        dots: true,
        autoplaySpeed: 2000, // Auto change every 2 seconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // On medium screens, show 2 cards
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // On small screens, show 1 card
                    slidesToScroll: 1
                }
            }
        ]
    });
});
