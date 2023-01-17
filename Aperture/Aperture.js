let header = document.querySelector('.header__content'),
    headerH = document.querySelector('.header__content').clientHeight;

document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll>headerH + 610) {
        header.classList.add('fixed');
    } else{
        header.classList.remove('fixed');
    }
}

$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger, .burger__list').toggleClass('active');
    });
});