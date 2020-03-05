var x = document.getElementById("click")

	x.onclick = function (){ 
	var y = document.createElement ("img")
	y.src = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Nicolae_Dobrin_3.jpg"
	y.style.width = "300px"

	x.appendChild (y);

	y.onmouseover = function (){
		y.parentNode.removeChild(y)

	} 
	}      
         