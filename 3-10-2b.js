document.addEventListener('DOMContentLoaded',function(){
    var h = document.getElementById("title");
    h.textContent = "はじめまして";
    console.log("called: DOMContentLoaded");
});
window.onload = function(){
    console.log("called: window.onload")
}