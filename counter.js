var counting_elements = Array.from(document.getElementsByClassName("countup"));
var progress_circles = Array.from(document.getElementsByClassName('progress'));

function is_on_screen(element) {
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}

counting_elements.forEach(element => {
    var end = parseInt(element.innerText);
    var start = 0;
    var duration = 2000;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var index = counting_elements.indexOf(element);
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        if (!is_on_screen(element)) {
            return;
        }
        progress_circles[index].style.strokeDashoffset = (2 * Math.PI * 100) * ((100 - current) / 100);
        current += increment;
        element.innerHTML = current + "%";
        if (current == end) {
        clearInterval(timer);
        }
    }, stepTime + index * 5);
}); 