//Constructeur
var Npc = function(game, grid) {
	this._game = game;

    this.sprite = game.add.sprite(75, 75, 'npc'); //Attache le sprite au pnj
    game.physics.arcade.enable(this.sprite);
    
    //Déclaration des animations
    this.sprite.animations.add('left', [10, 11, 12], 10, true);
    this.sprite.animations.add('right', [3, 4, 5], 10, true);
    this.sprite.animations.add('down', [0, 1, 2], 10, true);
    this.sprite.animations.add('up', [6, 7, 8], 10, true);

    console.log('NPC Class');
};

Npc.prototype.getPosGrid = function(){
	let posGrid = new Array();
	posGrid.push( Math.round( this.sprite.centerX/8 ) );
	posGrid.push( Math.round( this.sprite.centerY/8 ) );

	return posGrid;
};

Npc.prototype.updatePosGrid = function(x, y){
    console.log('move');
    if(Math.round(this.sprite.x) < x*8 && Math.round(this.sprite.y) == y*8){
        console.log('right');
        this.sprite.animations.play('right');
    }

    if(Math.round(this.sprite.x) > x*8 && Math.round(this.sprite.y) == y*8){
        console.log('left');
        this.sprite.animations.play('left');    }

    if(Math.round(this.sprite.x) == x*8 && Math.round(this.sprite.y) < y*8){
        console.log('down');
        this.sprite.animations.play('down');
    }

    if(Math.round(this.sprite.x) == x*8 && Math.round(this.sprite.y) > y*8){
        console.log('up');
        this.sprite.animations.play('up');
    }
    this._game.physics.arcade.moveToXY( this.sprite, x*8, y*8, 90, 100);
};
