window.addEventListener('load', function () {
    
    alert("START!");
    const list = element.querySelectorAll("*");

    for (let i = 0; i < list.length; i++) {
        if (list[i].style["z-index"] == 2147483647)
            alert("It's loaded!");
    }
})

window.onload = (event) => {
    const list = element.querySelectorAll("*");

    for (let i = 0; i < list.length; i++) {
        if (list[i].style["z-index"] == 2147483647)
            alert("It's loaded!");
    }
};

document.addEventListener("change", function() {
    const list = element.querySelectorAll("*");

    for (let i = 0; i < list.length; i++) {
        if (list[i].style.zindex == 2147483647)
            this.alert("Found1");
    }
}); 

document.addEventListener("DOMContentLoaded", (event) => {
  const list = element.querySelectorAll("*");

    for (let i = 0; i < list.length; i++) {
        if (list[i].style["z-index"] == 2147483647)
            alert("It's loaded!");
    }
});
