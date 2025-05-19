let snowContainer = document.querySelector('.snow-container');

const createSnow = () => {
    let snow = document.createElement('span');
    snow.className = 'snow';

    // 雪のサイズ
    let minSize = 5;
    let maxSize = 7;
    let snowSize = Math.random() * (maxSize - minSize) + minSize;

    snow.style.width = snowSize + 'px';
    snow.style.height = snowSize + 'px';

    // 雪を生成する位置
    snow.style.left = Math.random() * 100 + '%';
    snow.style.top = '-10px'; // 初期位置を明示

    snowContainer.appendChild(snow);

    // 雪削除
    setTimeout(() => {
        snow.remove();
    }, 10000);
};

// 100msごとに雪を生成
setInterval(createSnow, 200);

