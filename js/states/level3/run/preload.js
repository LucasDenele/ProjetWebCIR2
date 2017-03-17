define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Lvl3');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/background.gif');
		game.load.image('backButton', 'assets/buttons/back.png');

	}

	return preload;
});