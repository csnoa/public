window.addEventListener('load', function () {
    const list = element.querySelectorAll("*");

    for (let i = 0; i < list.length; i++) {
        if (list[i].style.zindex == 2147483647)
            this.alert("Found1");
    }
})
