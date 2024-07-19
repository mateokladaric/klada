var underline = document.getElementById('movingunderline');
var x = 0;
var w = 0;

setInterval(() => {
    x = Math.cos(Date.now() / 1500) * 200;
    w = Math.sin(Date.now() / 1500) * 200 + 220;

    underline.style.transform = `translateX(${x}px)`;
    underline.style.width = `${w}px`;
}, 10);