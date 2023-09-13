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

let input_value = $('.callback input');

$('.callback button').on('click', function () {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(input_value.val())) {
        $(input_value).addClass('error');
    } else {
        // send data to server

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Дякуємо за підписку',
            showConfirmButton: false,
            timer: 3000
        })
        input_value.val('');
    }
})

$(input_value).on('focus', function () {
    if ($(this).hasClass('error')) {
        $(this).removeClass('error')
    }
})
