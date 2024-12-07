
document.addEventListener("DOMContentLoaded", function () {

    let drag = false; // 拖動
    let startY; // 起始Y
    let scrollTop; // 起始滾動位置
    let velocity = 0; // 速度
    let lastY; // 上次Y
    let animationFrame;

    // 平滑滾動函數
    const smoothScroll = () => {
        if (Math.abs(velocity) > 0.1) { // 當速度大於閾值時繼續滾動
            window.scrollBy(0, -velocity); // 滾動頁面
            velocity *= 0.95; // 速度逐漸減小（模擬減速）
            animationFrame = requestAnimationFrame(smoothScroll); // 再次請求動畫幀
        } else {
            cancelAnimationFrame(animationFrame); // 停止動畫
        }
    };

    // 滑鼠按下事件
    document.addEventListener("mousedown", (event) => {
        drag = true;
        startY = event.clientY; // 設定起始Y座標
        lastY = startY; // 初始化上一次Y座標
        scrollTop = window.scrollY; // 紀錄當前滾動位置
        velocity = 0; // 初始化速度
        cancelAnimationFrame(animationFrame); // 停止平滑滾動
    });

    // 滑鼠移動事件
    document.addEventListener("mousemove", (event) => {
        if (!drag) return; // 如果未按下滑鼠，忽略移動事件

        const currentY = event.clientY; // 當前Y座標
        const deltaY = currentY - lastY; // 計算Y方向的移動距離
        lastY = currentY; // 更新上一次的Y座標

        velocity = deltaY * 0.5; // 設定速度，並適度限制增幅
        window.scrollTo(0, scrollTop - (currentY - startY)); // 根據拖動距離滾動頁面
    });

    // 滑鼠放開事件
    document.addEventListener("mouseup", () => {
        if (drag) {
            drag = false;
            animationFrame = requestAnimationFrame(smoothScroll); // 啟動平滑滾動
        }
    });

    // 滑鼠移出視窗事件
    document.addEventListener("mouseleave", () => {
        if (drag) {
            drag = false;
            animationFrame = requestAnimationFrame(smoothScroll); // 啟動平滑滾動
        }
    });
    
});

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});
    
// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
console.log(e);
});
    
function toTop (){
    lenis.scrollTo(0)
} 
