const toggleBtn = document.querySelector('.toggle-btn');
const navList = document.querySelector('.nav-list');

toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    toggleBtn.classList.toggle('active'); // ハンバーガーアイコンのアニメーション
});

