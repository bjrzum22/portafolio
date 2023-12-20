$(document).ready(function () {
    $(document).on('click', '.icon-menu', function (e) {
        $('.container-nav').toggleClass('active');
    });
    //dar click en cualquier parte de la pantalla y cerrar el menu
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.header').length) {
            $('.container-nav').removeClass('active');
        }
    });
});