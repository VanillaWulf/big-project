console.log('1');

var burger = document.getElementById('burger');
var navigation = document.getElementById('navigation');

var burgerIcon = document.getElementById('burger-icon');
var crossIcon = document.getElementById('cross-icon');

console.log(navigation);
console.log(burger);
console.log(burgerIcon);
console.log(crossIcon);

burger.addEventListener("click", function(){
    navigation.classList.toggle('hide-mobile');
    burgerIcon.classList.toggle('hide-mobile');
    crossIcon.classList.toggle('hide-mobile');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
