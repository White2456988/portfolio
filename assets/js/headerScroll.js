window.addEventListener('scroll', function() {
    const heading = this.document.querySelector('.heading');

    if (window.scrollY > 50) {
        heading.classList.add('scrolled');
    } else {
        heading.classList.remove('scrolled');
    }
})