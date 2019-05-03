function time() {
var t = new Date();
document.getElementById("tx").innerHTML = t.toLocaleTimeString();
}
setInterval(time, 1000);