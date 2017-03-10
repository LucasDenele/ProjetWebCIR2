define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Home');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/background.gif');
	    game.load.image('Optionsbutton', 'assets/buttons/options.png');
	    game.load.image('Creditsbutton', 'assets/buttons/credits.png');
        game.load.image('Level1button', 'assets/buttons/credits.png');

	}

	return preload;
});