define(['phaser'],function(phaser){
	var create = function(game){

		function launchOptions(){
			game.state.start('options');
		}

		console.log('Create Home');

		game.add.sprite(0,0,'background');

		_optionsButton = game.add.button(700, 500, 'Optionsbutton', launchOptions, this, 2, 1, 0);
	
	}

	return create;
});