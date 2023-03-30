var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;


var dino = {
	x : 10,
	y : 200,
	width : 50,
	height : 50,
	draw() {
		ctx.fillStyle = 'green';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class Cactus {
	constructor() {
		this.x = 500;
		this.y = 200;
		this.width = 50;
		this.height = 50;
	}
	draw() {
		ctx.fillStyle = 'red';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}


var timer = 0;
var cactusArr = [];
var jumpTimer = 0;

function 프레임마다실행할거() {
	requestAnimationFrame(프레임마다실행할거);
	timer++;
	
	ctx.clearRect(0,0, canvas.width, canvas.height);
	
	if(timer % 120 === 0) {
		var cactus = new Cactus();
		cactusArr.push(cactus);
	}
	
	cactusArr.forEach((a, i, o)=> {
		if(a.x < 0) {
			o.splice(i, 1)
		}
		a.x--;
		a.draw();
	});
	
	if(jumping == true) {
		dino.y-=2;
		jumpTimer++;
	}
	
	if (jumpTimer > 60) {
		jumping = false;
		jumpTimer = 0;
	}

	if(jumping == false && dino.y < 200) {
		dino.y+=2;
	}
	
	dino.draw();
}

프레임마다실행할거();

var jumping = false;

document.addEventListener('keydown', function(e){
	if( e.code === 'Space'){
		jumping = true;
	}
})