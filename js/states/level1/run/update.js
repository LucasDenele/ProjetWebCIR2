define(['phaser'],function(phaser){
	var update = function(game){
        
        let rng = game.rnd.integerInRange(1, 2);
        if(1 == rng){
            game.physics.arcade.moveToObject(this._npc, this._lamp, 500, 1000);
        }else{
           // game.physics.arcade.accelerateToObject(this._npc, this._lamp2, 500, 1000);
        }
    }
	return update;
});