// メニューが開かれたときにoverlayを表示
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block'; 
});
