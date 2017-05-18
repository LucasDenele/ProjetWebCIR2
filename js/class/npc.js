//Constructeur
var Npc = function(game, x, y, possibleCoordOnGrid) {
	this._game = game;

    this.sprite = game.add.sprite(x, y, 'npc'); //Attache le sprite au pnj
    game.physics.arcade.enable(this.sprite);
    
    //Déclaration des animations
    this.sprite.animations.add('left', [10, 11, 12], 10, true);
    this.sprite.animations.add('right', [3, 4, 5], 10, true);
    this.sprite.animations.add('down', [0, 1, 2], 10, true);
    this.sprite.animations.add('up', [6, 7, 8], 10, true);

    this.possibleCoordOnGrid = possibleCoordOnGrid;

    console.log('NPC Class');
};

Npc.prototype.getPosGrid = function(){
	var posGrid = new Array();
	posGrid.push( Math.round( this.sprite.position.x/8 ) );
	posGrid.push( Math.round( this.sprite.position.y/8 ) );

	return posGrid;
};

Npc.prototype.updatePosGrid = function(x, y){
   if(Math.round(this.sprite.position.x) < x*8 
    	&& this.sprite.position.y >= y*8-4 && this.sprite.position.y <= y*8+4){
        this.sprite.animations.play('right');
    	this.sprite.body.velocity.x = 80;
    	this.sprite.body.velocity.y = 0;
    }


    if(Math.round(this.sprite.position.x) > x*8 
    	&& this.sprite.position.y >= y*8-4 && this.sprite.position.y <= y*8+4){
        this.sprite.animations.play('left');
    	this.sprite.body.velocity.x = -80;
    	this.sprite.body.velocity.y = 0;
    }


    if(this.sprite.position.x >= x*8-4 && this.sprite.position.x <= x*8+4
     && Math.round(this.sprite.position.y) < y*8){
        this.sprite.animations.play('down');
    	this.sprite.body.velocity.x = 0;
    	this.sprite.body.velocity.y = 80;
    }


    if(this.sprite.position.x >= x*8-4 && this.sprite.position.x <= x*8+4
     && Math.round(this.sprite.position.y) > y*8){
        this.sprite.animations.play('up');
    	this.sprite.body.velocity.x = 0;
    	this.sprite.body.velocity.y = -80;    	
    }
};

Npc.prototype.getNextPosGrid = function(){
	return this.possibleCoordOnGrid[Math.floor(Math.random() * (this.possibleCoordOnGrid.length-1))]; 
}