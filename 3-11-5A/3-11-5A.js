window.onload = function(){
    document.getElementById("setNum").onchange = setNum;
}

function setNum(e){
    var num = parseInt(e.target.value);
    var v0 = num, v1 = 0.5*num, v2 = 100 * num, v3 = 114514 * num;
    document.getElementById("i0").textContent = v0;
    document.getElementById("i1").textContent = v1;
    document.getElementById("i2").textContent = v2;
    document.getElementById("i3").textContent = v3;
    document.getElementById("num").textContent = num
}