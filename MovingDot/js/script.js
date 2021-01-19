var canvas = document.getElementById('c1');
var ctx = canvas.getContext("2d");


var pi = Math.PI;
var x = Math.floor(400*Math.random());
var y = Math.floor(200*Math.random());
	
//var x = 200;
//var y = 100;
var stepCount = 0;
var direction;
var timer;
var color = 'green';
var myX;
var myY;




function drawDot(){
	ctx.clearRect(0, 0, 400, 200);
	if(stepCount == 0){
		stepCount = Math.floor(15*Math.random());
		direction = Math.floor(8*Math.random());
	}
	else{
		stepCount--;
	}
	switch(direction){
		case 0:
			y--;
			break;
		case 1:
			x++;
			break;
		case 2:
			y++;
			break;
		case 3:
			x--;
			break;
		case 4:// вправо вверх
			x++;
			y--;
			break;
		case 5:// вправо вниз
			x++;
			y++;
			break;
		case 6: // влево вниз
			x--;
			y++;
			break;
		case 7: //влево вверх
			x--;
			y--;
			break;												
	}
	if(x==10)direction = 1;
	if(x==400)direction = 3;
	if(y==10)direction = 2;
	if(y==180)direction  =0;

	if(stepCount==0){
		color = Math.floor(7*Math.random());
		switch(color){
			case 0:
			ctx.strokeStyle = 'yellow';
			ctx.fillStyle = 'yellow';
				;
				break;
			case 1:
			ctx.strokeStyle =  'green';
			ctx.fillStyle = 'green';
				break;
			case 2:
			ctx.strokeStyle = 'blue';
			ctx.fillStyle = 'blue';
				break;
			case 3:
			ctx.strokeStyle = 'black';
			ctx.fillStyle = 'black';
				break;
			case 4:
			ctx.strokeStyle = 'gray';
			ctx.fillStyle = 'gray';
				break;
			case 5:
			ctx.strokeStyle = 'pink';
			ctx.fillStyle = 'pink';
				break;
			case 6:
			ctx.strokeStyle = 'orange';
			ctx.fillStyle = 'orange';
				break;																	

		}
	}

	ctx.beginPath();
	ctx.fillRect(x-3,y-3,5,5);
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(myX,myY);
	ctx.strokeStyle = color;
	ctx.stroke();

	timer = setTimeout(drawDot, 50);
}



drawDot();

canvas.onmousemove = function(event){
	myX = event.offsetX;
	myY = event.offsetY;

}
