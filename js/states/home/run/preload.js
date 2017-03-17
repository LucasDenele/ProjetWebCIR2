define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Home');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/background.jpg');
	    
	    game.load.image('Optionsbutton', 'assets/Options.png');
	    game.load.image('Creditsbutton', 'assets/Credits.png');

	}

	return preload;
});