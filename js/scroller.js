document.addEventListener("DOMContentLoaded", () => {
    const scroller = document.getElementById('technologyScroller');
    const items = document.querySelectorAll('.techItem');
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight, 10);
    let scrollAmount = 0;

    function autoScroll() {
        scrollAmount += 1;
        if (scrollAmount >= itemWidth) {
            scroller.appendChild(scroller.firstElementChild);
            scrollAmount = 0;
        }
        scroller.scrollLeft = scrollAmount;
    }

    setInterval(autoScroll, 5);
});