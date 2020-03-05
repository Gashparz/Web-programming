var close = document.getElementById("closeIfr");//close buton harta
var ifr = document.getElementById("ifr");//ifr harta
var visible = 1;

close.onclick = function() {
    if(visible === 1) {
        visible = 0;
        ifr.style.display = "none";
        close.style.left = "10%";

        close.innerText = "Show";
    }
    else {
        visible = 1;
        ifr.style.display = "inline-block";
        close.style.left = "90%";

        close.innerText = "Hide";
    }
}


var clAs = document.getElementById("closeAside");//buton aside 
var aside = document.getElementById("asideInfo");//info 
var visAs = 1;

clAs.onclick = function() {
    if(visAs === 1) {
        visAs = 0;
        aside.style.visibility = "hidden";
        clAs.style.display = "fixed";
        clAs.style.right = "10px";
        clAs.style.top = "95px";

        clAs.style.visibility = "visible";
        clAs.innerText = "Show";
    }
    else {
        visAs = 1;
        aside.style.visibility = "visible";
        clAs.style.left = "auto";

        clAs.innerText = "Hide";
    }
}
