document.addEventListener("DOMContentLoaded", function () {
    function initializeSlider1() {
        var slideIndex = 0;

        function showSlides() {
            var slides = document.querySelectorAll(".slider1 .slide");
            slideIndex++;
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }

            var translateValue = -slideIndex * 100 + "%";
            document.querySelector(".slider1 .slide-track").style.transform = "translateX(" + translateValue + ")";
        }

        setInterval(showSlides, 3000);
    }

    function initializeSlider2() {
        var slideIndex = 0;

        function showSlides() {
            var slides = document.querySelectorAll(".slider2 .slide");
            slideIndex++;
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }

            var translateValue = -slideIndex * 100 + "%";
            document.querySelector(".slider2 .slide-track").style.transform = "translateX(" + translateValue + ")";
        }

        setInterval(showSlides, 3000);
    }

    // Inicializar Slider1
    initializeSlider1();

    // Inicializar Slider2
    initializeSlider2();
});
