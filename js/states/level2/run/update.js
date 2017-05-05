define(['phaser'],function(phaser){
	var update = function(game){

		if(!this._light.alive){
			this._npc.centerX = game.rnd.integerInRange(200,600);
			this._npc.centerY = game.rnd.integerInRange(200,600);
			this._light.reset(0, 0);
			this._light.centerX = this._npc.centerX;
			this._light.centerY = this._npc.centerY;
		}
	}

	return update;
});