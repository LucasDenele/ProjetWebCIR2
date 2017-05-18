define(['phaser'],function(phaser){
	var preload = function(game){
			
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/backgrounds/background.jpg');
		game.load.spritesheet('backButton', 'assets/buttons/back.png',114,40);
		game.load.image('briquet', 'assets/credits/briquet.jpg');
		game.load.image('carlier', 'assets/credits/carlier.jpg');
		game.load.image('decolnet', 'assets/credits/decolnet.jpg');
		game.load.image('denele', 'assets/credits/denele.jpg');

	}

	return preload;
});