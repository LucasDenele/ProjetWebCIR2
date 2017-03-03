define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Home');
		
		let loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/sky.png');
	    game.load.image('Optionsbutton', 'assets/options.png');

	}

	return preload;
});