function openId() {
    const openElement = document.getElementsByClassName("main");
    console.log(openElement);
    for (var i = 0; i < openElement.length; i++) {
        openElement[i].style.display = "block";
    }
}
document.ondragstart = function () { return false; };
(() => {
    onload = () => {
        
    };
})();
setTimeout("openId()", 3600)