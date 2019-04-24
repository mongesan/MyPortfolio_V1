function openId() {
    const openElement = document.getElementsByClassName("main");
    console.log(openElement);
    for (var i = 0; i < openElement.length; i++) {
        openElement[i].style.display = "block";
    }
}

(() => {
    onload = () => {
        
    };
})();

setTimeout("openId()", 3000)