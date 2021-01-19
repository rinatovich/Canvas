var canvas = document.getElementById('c1');
var ctx = canvas.getContext("2d");
var myColor = 'red';

document.getElementById('color').oninput = function(){
	myColor = this.value;
}


	//ctx.fillRect(x-5,y-5,10,10);
canvas.onmousedown = function(event){
	canvas.onmousemove = function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		ctx.fillStyle = myColor;
		ctx.fill();
		ctx.fillRect(x-5,y-5,10,10);
	}
	canvas.onmouseup = function(){
		canvas.onmousemove = null;
	}

}