
// - - - - - - - - - - variables - - - - - - - - - - //

// variables for images
var imgPlayer = new Image();
imgPlayer.src = "images/trex.jpg";

var imgObstacle = new Image();
imgObstacle.src = "images/cactus.jpg";

var imgCloud = new Image();
imgCloud.src = "images/cloud.png";

// variables for obstacle
minHeight = 20;
maxHeight = 100;
minWidth = 10;
maxWidth = 20;
minGap = 200;
maxGap = 500;
gap = randGap();

// obstacle variable
var myObstacles = [];

// player
var player = {
	x:20,
	y:470,
	speedY:0,
	jumpHeight:280,
	update: function(){ 
		gameArea.context.fillRect(this.x, this.y, 30, 30);
		// gameArea.context.drawImage(imgPlayer, this.x, this.y, 50, 50);
	}, 

	// we change the y position
	newPos: function(){
		if(this.y < this.jumpHeight){
			this.speedY = 2;
		}
		this.y = this.y + this.speedY;

		// while coming down from a jump, our player must stop on the platform.
		if(this.speedY == 2 && this.y == 470){
			this.speedY = 0;
		}
	},
}

// variable Game Area: Canvas
var gameArea = {
	canvas:document.createElement("canvas"),
	
	// To start the game
	start: function(){
		this.canvas.height = 500;
		this.canvas.width = 1200;
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.context=this.canvas.getContext("2d");

		// frame counts the number of times we run "updateGameArea()"
		this.frame = 0;
		// to update our gameArea every 5 seconds using updateGameArea function
		this.interval = setInterval(this.updateGameArea, 5);
		window.addEventListener("keydown", jump);
	},

	// To update the game
	updateGameArea: function(){
		gameArea.clear();

		// everytime after running updateGameArea() 150	times, we add a new obstacle
		if(everyinterval(gap)){
			myObstacles.push(new obstacle());
			
			// updating the gap for next obstacle
			gap = randGap();

			// reset the frame value
			frame = 0;
		}

		// moving the obstacles
		for(i=0; i<myObstacles.length; i++){
			myObstacles[i].x -= 1;
			myObstacles[i].draw();
		}

		// incrementing the "frame"
		gameArea.frame++;

		// updating the player
		player.update();

		// updating the new position (if jumped) of player 
		player.newPos();
	},

	// "clearRect" clears a rectangle of the given size and coordinates
	clear:function(){
		gameArea.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

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

// function to count the number of times we run "updateGameArea()"
function everyinterval(n){
	if(gameArea.frame % n == 0)
		return true;
	else
		return false;
}

// function to make the player jump
function jump(){
	player.speedY = -2;
}

// function for random gaps between two consecutive obstacles
function randGap(){
	return Math.floor(minGap+Math.random()*(maxGap-minGap+1));
}

// function for making obstacles
function obstacle(){
	this.height = Math.floor(minHeight + Math.random()*(maxHeight-minHeight+1));
	this.width = Math.floor(minWidth + Math.random()*(maxWidth-minWidth+1));

	// drawing the obstacle
	this.x = 1200;
	this.y = gameArea.canvas.height - this.height;
	this.draw = function(){
		gameArea.context.fillRect(this.x, this.y, this.width, this.height);
		// gameArea.context.drawImage(imgObstacle, this.x, this.y, this.width, this.height);
	}
}