define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Options');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/Creditsbackground.gif');
		game.load.image('background', 'assets/background.jpg');
		game.load.image('backButton', 'assets/buttons/back.png');
		game.load.image('briquet', 'assets/credits/briquet.jpg');
		game.load.image('carlier', 'assets/credits/carlier.jpg');
		game.load.image('decolnet', 'assets/credits/decolnet.jpg');
		game.load.image('denele', 'assets/credits/denele.jpg');

	}

	return preload;
});