// Animate and remove h1 when a to z key is pressed and add fadeIn animation on canvas
$("html").on("keydown", function (event) {
    if (event.which >= 65 && event.which <= 90) {
        $("h1").css("display", "none");
        $(canvas).addClass("animated fadeIn");
    } else {
        $("h1").css("display", "unset");
        $("h1").toggleClass("animated shake");
    }
});

// Animate h1 when hovered over
$("h1").on("mouseenter", function () {
    $(this).addClass("animated bounceIn")
})

// Remove animated class when the animation is done
$("h1").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
    $(this).removeClass("animated shake");
    $(this).removeClass("animated bounceIn");
});
$(canvas).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
    $(this).removeClass("animated fadeIn");
});

// SOCIAL PANEL JS
var floating_btn = document.querySelector('.floating-btn');
var close_btn = document.querySelector('.close-btn');
var social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', function () {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', function () {
    social_panel_container.classList.remove('visible')
});