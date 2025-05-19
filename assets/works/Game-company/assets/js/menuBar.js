let closeNav = document.querySelector('.close-btn');
let openNav = document.querySelector('.open-btn');

let menuBar = document.querySelector('.menu-bar');

closeNav.addEventListener('click', function () {
    menuBar.classList.toggle('active');
    closeNav.classList.toggle('active');
    openNav.classList.toggle('active');
});

openNav.addEventListener('click', function () {
    menuBar.classList.toggle('active');
    closeNav.classList.toggle('active');
    openNav.classList.toggle('active');
});
