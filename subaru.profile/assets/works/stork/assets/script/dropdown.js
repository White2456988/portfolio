const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropbtn");
    const subMenu = dropdown.querySelector(".sub_menu");

    button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation(); // 親要素へのイベント伝播を防ぐ

        // 他の開いているメニューを閉じる
        document.querySelectorAll(".sub_menu.show").forEach(menu => {
            if (menu !== subMenu) {
                menu.classList.remove("show");
            }
        });

        subMenu.classList.toggle("show");
    });
});

// メニュー外をクリックしたら閉じる
document.addEventListener("click", function () {
    document.querySelectorAll(".sub_menu.show").forEach(menu => {
        menu.classList.remove("show");
    });
});

