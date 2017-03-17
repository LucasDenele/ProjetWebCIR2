define(['phaser'],function(phaser){
	var create = function(game){
		console.log('Create Lvl3');

		function backToMenu(){
			game.state.start('home');
		}

		game.add.sprite(0,0,'background');
		game.add.text(10, 10, 'Level 3 :', {font: '30px Courier', fill: '#ffffff'});
		game.add.button(700, 500, 'backButton', backToMenu, this, 2, 1, 0);

	}

	return create;
});