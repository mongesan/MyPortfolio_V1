function openId() {
    const openElement = document.getElementsByClassName("main");
    console.log(openElement);
    for (var i = 0; i < openElement.length; i++) {
        openElement[i].style.display = "block";
    }
}

setTimeout("openId()", 3600);

/*
const icon1 = document.getElementById('update');
const target1 = document.getElementsByClassName('news')[0];
const power1 = 0;
console.log(icon1);
console.log(target1);
icon1.addEventListener('mouseenter', () => {
    target1.style.backgroundPosition = power1 + 'px';
    power1++;
}, false);
*/