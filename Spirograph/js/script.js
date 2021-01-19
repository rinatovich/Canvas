var canvas = document.getElementById('c1');
var ctx = canvas.getContext("2d");


var btn = document.getElementById('btn');
var teta = 0;
var timer;
var R;
var r;
var d;
var Rin = document.getElementById('R');
var rin = document.getElementById('r');
var din = document.getElementById('d');

btn.onclick = function(){
	ctx.clearRect(0, 0, 600, 600);
	R = Number(Rin.value);
	r = Number(rin.value);
	d = Number(din.value);
}


function spiro(){
	var x = (R-r) * Math.cos(teta) + d * Math.cos((R-r)*teta/r);
	var y = (R-r) * Math.sin(teta) - d * Math.sin((R-r)*teta/r);
	teta = teta + 0.1;
	ctx.fillRect(300 +  1.5 *x,300 +1.5 * y, 4, 4);
	timer = setTimeout(spiro,10);

}
spiro();