define(['phaser'],function(phaser){
	var create = function(game){
		console.log('Create Options');

		game.add.sprite(0,0,'background');
	}

	return create;
});