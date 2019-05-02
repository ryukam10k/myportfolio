var i = 0;
var printString;
var moji = "Hello World. This is My Portfolio.";

function printMoji() {
    document.getElementById("typing").innerText = moji.substring(0, i++);
    if (i <= moji.length) {
        setTimeout("printMoji()", 300);
    }
}