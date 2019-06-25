
// - - - - - - - - - - variables - - - - - - - - - - //

// variables for obstacle
minHeight = 20;
maxHeight = 100;
minWidth = 10;
maxWidth = 20;
minGap = 200;
maxGap = 500;

var myObstacles = [];



// variable Game Area: Canvas
var gameArea = {
	canvas:document.createElement("canvas"),
	
	// To start the game
	start: function(){
		this.canvas.height = 500;
		this.canvas.width = 1200;
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.context=this.canvas.getContext("2d");
	},

	// To update the game
	updateGameArea: function(){


	},

	// "clearRect" clears a rectangle of the given size and coordinates
	clear:function(){
		gameArea.context.clearRect(0, 0, this.canvas.height, this.canvas.width);

	},

	// to end the game
	stop:function(){

	}
}



// - - - - - - - - - - Functions - - - - - - - - - - //

// function to start the game
function startGame(){
	gameArea.start();
}

// function for obstacles
function obstacle(){
	this.height = Math.floor(minHeight + Math.random()*(maxHeight-minHeight+1));
	this.width = Math.floor(minWidth + Math.random()*(maxWidth-minWidth+1));

	// drawing the obstacle
	this.x = 1200;
	this.y = gameArea.canvas.height - this.height;
	this.draw = function(){
		gameArea.context.fillRect(this.x, this.y, this.width, this.height);
	}
}