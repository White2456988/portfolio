const toggleBtn = document.querySelector('.toggle-btn');
const navList = document.querySelector('.nav-list');
let navLinks = document.querySelectorAll('.nav-list a');

toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    toggleBtn.classList.toggle('active'); 
});

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navList.classList.remove('active');
        toggleBtn.classList.remove('active');
    });
});