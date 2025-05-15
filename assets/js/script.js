// add copyright year in footer
let footercr = $(".footer-bottom-copyright");
footercr.text(footercr.text().replace("${year}", new Date().getFullYear()));

// title parallax
$(document).on("scroll", function() {
    $(".hero-bg").eq(0).css({
        transform: `translateY(${$(window).scrollTop() / 3}px)`
    });
});