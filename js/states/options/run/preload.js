define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Options');
		
		let loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/sky.png');
	    game.load.image('button', 'assets/platform.png');

	}

	return preload;
});