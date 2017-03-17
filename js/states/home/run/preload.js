define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Home');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/background.gif');
	    
	    game.load.image('Optionsbutton', 'assets/Buttons/Options.png');
	    game.load.image('Creditsbutton', 'assets/Buttons/Credits.png');
        game.load.image('Helpbutton','assets/Buttons/Help.png');

	}

	return preload;
});