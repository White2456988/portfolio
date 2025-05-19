document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle_btn");
    const mainMenu = document.querySelector(".main_menu");

    toggleBtn.addEventListener("click", function () {
        mainMenu.classList.toggle("show");
        toggleBtn.classList.toggle("open"); // ハンバーガーメニューのアニメーション用
    });

    // メニュー外をクリックすると閉じる
    document.addEventListener("click", function (event) {
        if (!toggleBtn.contains(event.target) && !mainMenu.contains(event.target)) {
            mainMenu.classList.remove("show");
            toggleBtn.classList.remove("open");
        }
    });
});
