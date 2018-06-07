
$('.contato_botao').on('click', function() {
    $('.e-mail_window').addClass('sec_window_open')
    $('.main').addClass('main_blur')
    $('.close').addClass('close_appear')

    $('.e-mail_window').siblings().removeClass('sec_window_open')
})

$('.sobre_botao').on('click', function() {
    $('.about_window').addClass('sec_window_open')
    $('.main').addClass('main_blur')
    $('.close').addClass('close_appear')

    $('.about_window').siblings().removeClass('sec_window_open')
})

$('.combos_botao').on('click', function() {
    $('.combos_window').addClass('sec_window_open')
    $('.main').addClass('main_blur')
    $('.close').addClass('close_appear')

    $('.combos_window').siblings().removeClass('sec_window_open')
})

$('.doces_botao').on('click', function() {
    $('.doces_window').addClass('sec_window_open')
    $('.main').addClass('main_blur')
    $('.close').addClass('close_appear')

    $('.doces_window').siblings().removeClass('sec_window_open')
})


$('.salgados_botao').on('click', function() {
    $('.salgados_window').addClass('sec_window_open')
    $('.main').addClass('main_blur')
    $('.close').addClass('close_appear')

    $('.salgados_window').siblings().removeClass('sec_window_open')
})


$('.close').on('click', function() {
    $('.sec_window').removeClass('sec_window_open')
    $(this).removeClass('close_appear')
    $('.main').removeClass('main_blur')
})

setTimeout(function() {
    $('.container_det').removeClass('container_det_before_hover')
    $('.container_det h5').removeClass('container_det_h5_before_hover')
}, 1000)

$('.mobile_menu').on('click', function() {
    $('#second_header').addClass('second_header_appear')
})

$('.mobile_fechar').on('click', function() {
    $('#second_header').removeClass('second_header_appear')
})

$('#second_header ul li').on('click', function() {
    if($(window).width() <= 500) {
        $('#second_header').removeClass('second_header_appear')
    }
})

