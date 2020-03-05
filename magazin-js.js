var btnrgb = document.getElementById("dropbtn1");
var but_add = document.getElementById("add");
var input = document.getElementById("camp_input");
var tabel = document.getElementById("tab");
var but_del = document.getElementById("delete");
var but_delarr = document.getElementById("but_del_arr");
var count;
var cos = [];

window.onload = function() {
    if(this.JSON.parse(localStorage.getItem("count")) === null) { // nu am gasit count
        count = 0;
        localStorage.setItem("count", count);
    }
    else {
        count = this.JSON.parse(localStorage.getItem("count"));
        console.log(count);
    }


    for(var i = 0; i < count; ++i) {
        // de scos textu din localstorage si de scris
    }
}

var linii = document.getElementsByTagName("tr");

function deleteLine(idBut) {
    var linie;
    for(var i = 0; i < linii.length; ++i) {
        if(idBut === linii[i].id) {
            linie = linii[i];
            break;
        }
    }

    localStorage.removeItem(idBut);
    tabel.removeChild(linie);
}

function createLine() {
    var newTr = document.createElement("tr");
    newTr.setAttribute("id", "tr" + count);
    var hr = document.createElement("hr");
    hr.setAttribute("id", "hr" + count);

    var newTd1 = document.createElement("td");

    var newTd2 = document.createElement("td");

    var newTd3 = document.createElement("td");
  
    var newBut = document.createElement("input");
    newBut.type = "button";
    newBut.value = "X";
    newBut.id = "tr" + count;
    newBut.addEventListener("click", function() {
        deleteLine(newBut.id);
    })
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var d = new Date();
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    today = dd + '/' + mm + '/' + yyyy;
    newTd1.innerText = input.innerText;
    cos[count]=input.innerText;
    newTd2.innerHTML = today + " " +time;
    newTd3.appendChild(newBut);
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    tabel.appendChild(newTr);

    input.innerHTML = "";

    count++;
    localStorage.setItem("count", count);
    localStorage.setItem(newBut.id, newTd1.innerText);
}



but_add.addEventListener("click", function() {
    if(input.innerText.length > 0) {
        //console.log(input.value);
        createLine();
    }
})

input.addEventListener("keypress", function(event) {
    if(input.innerText.length > 0 && event.keyCode === 13) {
        //console.log(input.value);
        createLine();
    }
})


but_del.onclick = function() {
    count = 0;
    localStorage.setItem("count", count);

    while(linii.length > 1) {
        linii[linii.length - 1].remove();
    
    }

    localStorage.clear();
}

var titlu = document.getElementsByClassName("stema-text");
function changetitlec(){
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    titlu[0].style.color = "rgb(" + r + "," + g + "," + b + ")";
}
function sayTitlu(phrase, who) {
  alert( phrase +""+ who );
}

//let timerId=setInterval(sayTitlu, 200, "Schimbarea culorii tilului se va opri dupa ","15 secunde");
//setTimeout(() => { clearInterval(timerId); }, 500);
let timerIdTitlu=setInterval(changetitlec, 500, "O aplicatie facuta de","Predescu Eduard");
setTimeout(() => { clearInterval(timerIdTitlu); }, 15000);

function getCmpStyle()
{
  var elem=document.getElementsByClassName("stema-text");
  var theCSSprop=window.getComputedStyle(elem[0],null).getPropertyValue("color");
  document.getElementById("rgb_ttl").innerHTML = theCSSprop;
  
}
btnrgb.addEventListener("click", function() {  
  getCmpStyle();
  document.getElementById("dropbtn1").className = "dropbtn2";
})

var but1 = document.getElementById("b1");
var but2 = document.getElementById("b2");
var but3 = document.getElementById("b3");
var but4 = document.getElementById("b4");

but4.addEventListener("click", function(event){
  event.preventDefault();
  event.stopPropagation();
},true)
but1.addEventListener("click", function(){
  var newTr = document.createElement("tr");
    newTr.setAttribute("id", "tr" + count);
    var hr = document.createElement("hr");
    hr.setAttribute("id", "hr" + count);

    var newTd1 = document.createElement("td");

    var newTd2 = document.createElement("td");

    var newTd3 = document.createElement("td");
  
    var newBut = document.createElement("input");
    newBut.type = "button";
    newBut.value = "X";
    newBut.id = "tr" + count;
    newBut.addEventListener("click", function() {
        deleteLine(newBut.id);
    })
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var d = new Date();
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    today = dd + '/' + mm + '/' + yyyy;
    newTd1.innerText = "Modelul de tricou numarul 1";
    newTd2.innerHTML = today + " " +time;
    newTd3.appendChild(newBut);
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    tabel.appendChild(newTr);

    input.innerHTML = "";

    count++;
    localStorage.setItem("count", count);
    localStorage.setItem(newBut.id, newTd1.innerText);
})

but2.addEventListener("click", function(){
  var newTr = document.createElement("tr");
    newTr.setAttribute("id", "tr" + count);
    var hr = document.createElement("hr");
    hr.setAttribute("id", "hr" + count);

    var newTd1 = document.createElement("td");

    var newTd2 = document.createElement("td");

    var newTd3 = document.createElement("td");
  
    var newBut = document.createElement("input");
    newBut.type = "button";
    newBut.value = "X";
    newBut.id = "tr" + count;
    newBut.addEventListener("click", function() {
        deleteLine(newBut.id);
    })
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var d = new Date();
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    today = dd + '/' + mm + '/' + yyyy;
    newTd1.innerText = "Modelul de tricou numarul 2";
    newTd2.innerHTML = today + " " +time;
    newTd3.appendChild(newBut);
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    tabel.appendChild(newTr);

    input.innerHTML = "";

    count++;
    localStorage.setItem("count", count);
    localStorage.setItem(newBut.id, newTd1.innerText);
})
but3.addEventListener("click", function(){
  var newTr = document.createElement("tr");
    newTr.setAttribute("id", "tr" + count);
    var hr = document.createElement("hr");
    hr.setAttribute("id", "hr" + count);

    var newTd1 = document.createElement("td");

    var newTd2 = document.createElement("td");

    var newTd3 = document.createElement("td");
  
    var newBut = document.createElement("input");
    newBut.type = "button";
    newBut.value = "X";
    newBut.id = "tr" + count;
    newBut.addEventListener("click", function() {
        deleteLine(newBut.id);
    })
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var d = new Date();
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    today = dd + '/' + mm + '/' + yyyy;
    newTd1.innerText = "Modelul de tricou numarul 3";
    newTd2.innerHTML = today + " " +time;
    newTd3.appendChild(newBut);
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    tabel.appendChild(newTr);

    input.innerHTML = "";

    count++;
    localStorage.setItem("count", count);
    localStorage.setItem(newBut.id, newTd1.innerText);
})
var materii = ["Ghete de football", "Minge semnata", "Manusi de portar"];
document.getElementById("arr").innerHTML = materii;
function fctArray() {
  materii.splice(0, 1);
  document.getElementById("arr").innerHTML = materii;
  document.getElementById("bbb").classList.add("bbbb")
}
