var canvas = document.getElementById('c1');
var ctx = canvas.getContext("2d");
var pi = Math.PI;


canvas.onmousedown = function(event){

	var fpx = event.offsetX;
	var fpy = event.offsetY;



	canvas.onmousemove = function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		ctx.clearRect(0, 0, 400, 200);
		ctx.beginPath();
		var radius = Math.pow( Math.pow(x-fpx, 2)+Math.pow(y-fpy,2) , 0.5);
		ctx.arc(fpx, fpy, radius,0, 2*pi, false);
		ctx.stroke();
	}
	canvas.onmouseup = function(){
		canvas.onmousemove = null;
	}
		ctx.clearRect(0, 0, 400, 200);
}