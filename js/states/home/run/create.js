define(['phaser'],function(phaser){
	var create = function(game){

		function launchOptions(){
			console.log('Click');
			//game.state.start('options');
		}

		console.log('Create Home');

		game.add.sprite(0,0,'background');

		_optionsButton = game.add.button(game.world.centerX - 200, game.world.centerY, 'button', this.launchOptions, this, 2, 1, 0)
	
	}

	return create;
});