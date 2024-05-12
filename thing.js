window.addEventListener('load', function () {
    const list = element.querySelectorAll("*");

    for (let i = 0; i < list.length; i++) {
        if (list[i].style["z-index"] == 2147483647)
            alert("It's loaded!");
    }
})
