define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Options');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/background.gif');
		game.load.image('backButton', 'assets/back.png');

	}

	return preload;
});