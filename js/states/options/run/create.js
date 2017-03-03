define(['phaser'],function(phaser){
	var create = function(game){
		console.log('Create Home');

		game.add.sprite(0,0,'background');
	}

	return create;
});