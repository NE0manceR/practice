$('.header__mobile-menu-btn').on('click', function () {
    $('.modal-bcg').fadeIn();
    $('.mobile-menu').css('display', 'block').addClass('active');
    $('body').css('overflow', 'hidden')
})

$('.mobile-menu__close, .modal-bcg').on('click', function () {
    $('.mobile-menu').fadeOut();
    $('.modal-bcg').fadeOut();
    $('body').css('overflow', 'auto')


    setTimeout(() => {
        $('.mobile-menu').removeClass('active');
    }, 500)
})