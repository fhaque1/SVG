var c = document.getElementById("svgarea");
var ns = "http://www.w3.org/2000/svg"

var x;
var y;
var constructCirc = function(e) {
	var circle = document.createElementNS(ns, "circle");
    circle.setAttributeNS(null, "cx", e.offsetX);
    circle.setAttributeNS(null, "cy", e.offsetY);
    circle.setAttributeNS(null, "r",  25);
    circle.setAttributeNS(null, "fill", "red");
    c.appendChild(circle);
	x = e.offsetX;
	y = e.offsetY;
};
var connectCirc = function(e) {
	if (c.innerHTML == ""){
		constructCirc(e);
	}	
	var line = document.createElementNS(ns, "line");
    line.setAttributeNS(null, "x1", x);
    line.setAttributeNS(null, "y1", y);
    line.setAttributeNS(null, "x2",  e.offsetX);
	line.setAttributeNS(null, "y2",  e.offsetY);
    line.setAttributeNS(null, "style", "stroke:rgb(0,0,0);stroke-width:2");
	c.appendChild(line);
	constructCirc(e);
};


c.addEventListener("click", connectCirc);
var b = document.getElementById("clear");
var clear = function(e) {
	c.innerHTML = "";
};
b.addEventListener("click", clear);