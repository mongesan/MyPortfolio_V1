var data = [
    { str: "114514", jpn: "イイヨコイヨ"},
    { str: "やったぜ。", jpn: "変態糞親父"},
    { str: "ﾌﾞﾘﾌﾞﾘﾌﾞﾘﾌﾞﾘｭﾘｭﾘｭﾘｭ!ﾌﾞﾂﾁﾁﾌﾞﾌﾞﾌﾞﾁﾁﾌﾞﾘﾘｲﾘﾌﾞﾌﾞｩｩｯｯｯ!!!", jpn:"ああああああああああああ!!!!!(KRSW)"},
    { str: "ウ　　ン　　チ　　ー　　コ　　ン　　グ", jpn:"ウンチーコングって知ってる?"},
    { str: "1145148101919", jpn:"汚　　　　　　　い"},
    { str: "くぁｗせｄｒｆｔｇｙふじこｌｐ", jpn:"くぁせの富士子さん"}
];
var timerId, index = 0, pos = 0;

function start(){
    pos = 0;
    document.getElementById("jpn").textContent = "";
    index = (index + 1)% data.length;
    var speedtick = 500/((data[index].str).length);
    clearInterval(timerId);
    timerId = setInterval(tick,speedtick);
}
function tick(){
    var str = data[index].str;
    document.getElementById("str").textContent = str.substr(0,pos);
    if (++pos > str.length){
        clearInterval(timerId);
        document.getElementById("jpn").textContent = data[index].jpn;
    }
}