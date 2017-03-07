define(['phaser'],function(phaser){
	var update = function(game){

		if(this._briquet.input.pointerOver()){
			this._portrait = game.add.sprite(300,300,'briquet');
		}
		if(this._carlier.input.pointerOver()){
			this._portrait = game.add.sprite(300,300,'carlier');
		}
		if(this._decolnet.input.pointerOver()){
			this._portrait = game.add.sprite(300,300,'decolnet');
		}
		if(this._denele.input.pointerOver()){
			this._portrait = game.add.sprite(300,300,'denele');
		}
		if(!this._briquet.input.pointerOver() && !this._carlier.input.pointerOver() &&
			!this._decolnet.input.pointerOver() && !this._denele.input.pointerOver() &&
			this._portrait != undefined){
			this._portrait.kill();
		}
	}

	return update;
});