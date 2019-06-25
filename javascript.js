var gameArea = {
	canvas.document.createElement("canvas"),
	start: function(){
		this.canvas.height = 500;
		this.canvas.width = 1200;
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.context=this.canvas.getContext("2d");
	},

	updateGameArea: function(){


	},

	// "clearRect" clears a rectangle of the given size and coordinates
	clear:function(){
		gameare.context.clearRect(0, 0, this.canvas.width, this.canvas.width);

	},

	// to end the game
	stop:function(){
		
	}

}