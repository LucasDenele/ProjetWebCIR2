define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Lvl1');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/background.jpg');
        game.load.image('interfaceBack','assets/greyback.jpg');
		game.load.spritesheet('backButton', 'assets/buttons/back.png',114,40);

	}

	return preload;
});